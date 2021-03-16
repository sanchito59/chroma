import { Component, Input, OnInit } from '@angular/core';
import { Palette } from '../_models/Palette';

@Component({
  selector: 'app-palette-card',
  templateUrl: './palette-card.component.html',
  styleUrls: ['./palette-card.component.css']
})
export class PaletteCardComponent implements OnInit {
  @Input() palette: Palette;

  constructor() { }

  ngOnInit(): void {
  }

}
