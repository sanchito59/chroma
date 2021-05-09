import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-main-blurb',
  templateUrl: './display-main-blurb.component.html',
  styleUrls: ['./display-main-blurb.component.css']
})
export class DisplayMainBlurbComponent implements OnInit {
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
