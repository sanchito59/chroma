import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-footer',
  templateUrl: './display-footer.component.html',
  styleUrls: ['./display-footer.component.css']
})
export class DisplayFooterComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() textColor: string;
  currentYear: number;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
