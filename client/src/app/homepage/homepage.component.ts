import { Component, OnInit } from '@angular/core';
import { Palette } from '../_models/Palette';
import { AccountService } from '../_services/account.service';
import { PaletteService } from '../_services/palette.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loading = false;
  registerMode = false;
  palettes: Palette[];

  constructor(public accountService: AccountService, private paletteService: PaletteService) { }

  ngOnInit(): void {
    this.loadPalettes();
  }

  loadPalettes(){
    this.loading = true;

    this.paletteService.getAllPalettes().subscribe(res => {
      this.palettes = res;
      this.loading = false;
    })
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
