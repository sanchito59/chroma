import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Palette } from '../_models/Palette';
import { DisplayPalette } from '../_models/DisplayPalette';
import { UserParams } from '../_models/UserParams';
import { User } from '../_models/User';
import { map, take } from 'rxjs/operators';
import { AccountService } from './account.service';
import { of } from 'rxjs';
import { getPaginatedResults, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  baseUrl = environment.apiUrl;
  palettes: Palette[] = [];
  paletteCache = new Map();
  user: User;
  userParams: UserParams;

  getUserParams = () => {
    return this.userParams;
  }

  setUserParams = (params: UserParams) => {
    this.userParams = params;
  }

  constructor(private http: HttpClient, private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
      this.user = user;
    })

    this.userParams = new UserParams();
  }

  getAllPalettes(userParams: UserParams) {
    var response = this.paletteCache.get(Object.values(userParams).join('-'));

    if (response) {
      return of(response);
    }

    let params = getPaginationHeaders(userParams.pageNumber, userParams.pageSize);

    return getPaginatedResults<Palette[]>(`${this.baseUrl}palettes`, params, this.http)
    .pipe(map(response => {
      this.paletteCache.set(Object.values(userParams).join('-'), response);
      return response;
    }));
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
