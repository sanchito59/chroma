import { Component, Input, OnInit } from '@angular/core';
import { Palette } from '../_models/Palette';

@Component({
  selector: 'app-palette-theme-display',
  templateUrl: './palette-theme-display.component.html',
  styleUrls: ['./palette-theme-display.component.css']
})
export class PaletteThemeDisplayComponent implements OnInit {
  @Input() palette: Palette;

  constructor() { }

  ngOnInit(): void {
  }

}
