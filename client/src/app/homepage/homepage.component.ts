import { Component, OnInit } from '@angular/core';
import { DisplayPalette } from '../_models/DisplayPalette';
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
  palettes: DisplayPalette[];
  randomPalette: DisplayPalette;

  constructor(public accountService: AccountService, private paletteService: PaletteService) { }

  ngOnInit(): void {
    this.loadPalettes();
    this.generateRandomPalette();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  loadPalettes(){
    this.loading = true;

    this.paletteService.getAllPalettes().subscribe(res => {
      this.palettes = res;
      this.loading = false;
    })
  }

  createNewPalette() {
    this.paletteService.createNewPalette(this.randomPalette).subscribe((res) => {
      this.palettes.unshift(res);
      this.generateRandomPalette();
    });
  }

  generateRandomPalette() {
    this.paletteService.generateRandomPalette().subscribe(res => {
      localStorage.setItem("randomPalette", JSON.stringify(res));
      this.randomPalette = res;
    })
  }
}
