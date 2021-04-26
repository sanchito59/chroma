import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-color-display',
  templateUrl: './vertical-color-display.component.html',
  styleUrls: ['./vertical-color-display.component.css']
})
export class VerticalColorDisplayComponent implements OnInit {
  @Input() colorName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
