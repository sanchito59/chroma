import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Palette } from "../_models/Palette";
import { PaletteService } from "../_services/palette.service";

@Injectable({
  providedIn: 'root'
})
export class PaletteDetailResolver implements Resolve<Palette> {

  constructor(private paletteService: PaletteService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Palette> {
    return this.paletteService.getPalette(route.paramMap.get('id'));
  };
};
