import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Output() cancelRegistration = new EventEmitter();
  registrationForm: FormGroup;
  validationErrors: string[] = []; // TODO

  constructor(private accountService: AccountService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      favoriteColor: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : { isMatching: true };
    }
  }

  register() {
    this.accountService.register(this.registrationForm.value).subscribe((res) => {
      this.router.navigateByUrl('/palettes');
    }, err => {
      this.validationErrors = err;
    })
  }

  cancel() {
    this.cancelRegistration.emit(false);
  }
}
