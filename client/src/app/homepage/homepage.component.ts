import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DisplayPalette } from '../_models/DisplayPalette';
import { Pagination } from '../_models/PaginatedResult';
import { UserParams } from '../_models/UserParams';
import { AccountService } from '../_services/account.service';
import { PaletteService } from '../_services/palette.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loading = false;
  registerMode = false;
  palettes: DisplayPalette[];
  randomPalette: DisplayPalette;
  pagination: Pagination;
  userParams: UserParams;

  constructor(public accountService: AccountService, private paletteService: PaletteService) {
    this.userParams = this.paletteService.getUserParams();
  }

  ngOnInit(): void {
    this.loadPalettes();
    this.generateRandomPalette();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  handlePageEvent(event: PageEvent) {
    this.userParams.pageNumber = event.pageIndex + 1;
    this.userParams.pageSize = event.pageSize;
  }

  loadPalettes(){
    this.loading = true;

    this.paletteService.getAllPalettes(this.userParams).subscribe(res => {
      this.palettes = res.result;
      this.pagination = res.pagination;
      this.loading = false;
    })
  }

  createNewPalette() {
    this.paletteService.createNewPalette(this.randomPalette).subscribe((res) => {
      this.palettes.unshift(res);
      this.generateRandomPalette();
    });
  }

  generateRandomPalette() {
    this.paletteService.generateRandomPalette().subscribe(res => {
      localStorage.setItem("randomPalette", JSON.stringify(res));
      this.randomPalette = res;
    })
  }
}
