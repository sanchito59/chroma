import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-fullwidth-section',
  templateUrl: './display-fullwidth-section.component.html',
  styleUrls: ['./display-fullwidth-section.component.css']
})
export class DisplayFullwidthSectionComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() secondaryColor: string;
  @Input() textColor: string;

  constructor() { }

  ngOnInit(): void {
  }

}
