import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from 'src/app/_models/User';
import { AccountService } from '../../../_services/account.service';


@Component({
  selector: 'app-display-header-banner',
  templateUrl: './display-header-banner.component.html',
  styleUrls: ['./display-header-banner.component.css']
})
export class DisplayHeaderBannerComponent implements OnInit {
  @Input() color: string;
  currentUser: User;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    let loggedInUser: User;

    this.accountService.currentUser$.pipe(take(1)).subscribe(user => loggedInUser = user);

    if (loggedInUser) {
      this.currentUser = loggedInUser;
    }
  }

}
