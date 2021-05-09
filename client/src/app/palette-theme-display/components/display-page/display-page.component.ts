import { Component, Input, OnInit } from '@angular/core';
import { Palette } from 'src/app/_models/Palette';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  @Input() palette: Palette;

  constructor() { }

  ngOnInit(): void {
  }

}
