import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
// MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule  } from '@angular/material/button'; 
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
// COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { TextInputComponent } from './text-input/text-input.component';
import { PaletteCardComponent } from './palette-card/palette-card.component';
import { PaletteDetailComponent } from './palette-detail/palette-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewPaletteColorComponent } from './new-palette-color/new-palette-color.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    TextInputComponent,
    PaletteCardComponent,
    PaletteDetailComponent,
    HomepageComponent,
    NewPaletteColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatTooltipModule,
    ClipboardModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
