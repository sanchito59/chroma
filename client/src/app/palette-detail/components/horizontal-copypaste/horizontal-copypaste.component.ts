import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-copypaste',
  templateUrl: './horizontal-copypaste.component.html',
  styleUrls: ['./horizontal-copypaste.component.css']
})
export class HorizontalCopypasteComponent implements OnInit {
  @Input() colorName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
