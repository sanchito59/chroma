import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account.service';
import { Palette } from './_models/Palette';
import { PaletteService } from './_services/palette.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chroma';
  registerMode = false;
  loading = false;
  palettes: Palette[];

  constructor(public accountService: AccountService, private paletteService: PaletteService) {}

  ngOnInit(): void {
    this.setCurrentUser();
    this.loadPalettes();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('chromaUser'));

    if (user) {
      this.accountService.setCurrentUser(user);
    }
  }

  loadPalettes(){
    this.loading = true;

    this.paletteService.getAllPalettes().subscribe(res => {
      this.palettes = res;
    })
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
