import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-palette-color',
  templateUrl: './new-palette-color.component.html',
  styleUrls: ['./new-palette-color.component.css']
})
export class NewPaletteColorComponent implements OnInit {
  @Input() color: string;

  constructor() { }

  ngOnInit(): void { }

}
