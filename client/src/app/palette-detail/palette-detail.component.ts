import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Palette } from '../_models/Palette';

@Component({
  selector: 'app-palette-detail',
  templateUrl: './palette-detail.component.html',
  styleUrls: ['./palette-detail.component.css']
})
export class PaletteDetailComponent implements OnInit {
  palette: Palette;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.palette = data.PaletteDetailResolver;
    });
  }
}
