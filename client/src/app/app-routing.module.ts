import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaletteDetailComponent } from './palette-detail/palette-detail.component';
import { PaletteDetailResolver } from './_resolvers/palette-detail.resolver';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'palettes/:id', component: PaletteDetailComponent, resolve: { PaletteDetailResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
