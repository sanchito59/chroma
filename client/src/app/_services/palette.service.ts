import { Injectable } from '@angular/core';
// import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Palette } from '../_models/Palette';
import { DisplayPalette } from '../_models/DisplayPalette';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  baseUrl = environment.apiUrl;
  // private paletteSource = new ReplaySubject<Palette>();
  // palettes$ = this.paletteSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllPalettes() {
    return this.http.get<Palette[]>(`${this.baseUrl}palettes`);
  }

  getPalette(id: string) {
    return this.http.get<Palette>(`${this.baseUrl}palettes/${id}`);
  }

  createNewPalette(newPalette: DisplayPalette) {
    return this.http.post<DisplayPalette>(`${this.baseUrl}users/add-palette`, newPalette);
  }

  generateRandomPalette() {
    return this.http.get<DisplayPalette>(`${this.baseUrl}palettes/random-palette`);
  }
}
