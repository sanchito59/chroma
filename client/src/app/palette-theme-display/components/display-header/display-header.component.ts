import { Component, Input, OnInit } from '@angular/core';
import { Palette } from 'src/app/_models/Palette';

@Component({
  selector: 'app-display-header',
  templateUrl: './display-header.component.html',
  styleUrls: ['./display-header.component.css']
})
export class DisplayHeaderComponent implements OnInit {
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
