import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PaletteDetailComponent } from './palette-detail/palette-detail.component';
import { PaletteDetailResolver } from './_resolvers/palette-detail.resolver';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'palettes/:id', component: PaletteDetailComponent, resolve: { PaletteDetailResolver } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
