import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-secondary-blurb',
  templateUrl: './display-secondary-blurb.component.html',
  styleUrls: ['./display-secondary-blurb.component.css']
})
export class DisplaySecondaryBlurbComponent implements OnInit {
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
