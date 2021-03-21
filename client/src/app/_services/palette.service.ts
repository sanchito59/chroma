import { Injectable } from '@angular/core';
// import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Palette } from '../_models/Palette';
import { NewPalette } from '../_models/NewPalette';

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

  createNewPalette(newPalette: NewPalette) {
    return this.http.post(`${this.baseUrl}users/add-palette`, newPalette);
  }
}
