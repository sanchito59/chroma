import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ClipboardModule } from '@angular/cdk/clipboard';
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
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// COMPONENTS
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { TextInputComponent } from './text-input/text-input.component';
import { PaletteCardComponent } from './palette-card/palette-card.component';
import { PaletteDetailComponent } from './palette-detail/palette-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewPaletteColorComponent } from './new-palette-color/new-palette-color.component';
import { AppComponent } from './app.component';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { HorizontalCopypasteComponent } from './palette-detail/components/horizontal-copypaste/horizontal-copypaste.component';
import { VerticalColorDisplayComponent } from './palette-detail/components/vertical-color-display/vertical-color-display.component';
import { PaletteThemeDisplayComponent } from './palette-theme-display/palette-theme-display.component';
import { DisplayHeaderComponent } from './palette-theme-display/components/display-header/display-header.component';
import { DisplayPageComponent } from './palette-theme-display/components/display-page/display-page.component';
import { DisplayMainBlurbComponent } from './palette-theme-display/components/display-main-blurb/display-main-blurb.component';
import { DisplayHeaderBannerComponent } from './palette-theme-display/components/display-header-banner/display-header-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    TextInputComponent,
    PaletteCardComponent,
    PaletteDetailComponent,
    HomepageComponent,
    NewPaletteColorComponent,
    RegistrationDialogComponent,
    HorizontalCopypasteComponent,
    VerticalColorDisplayComponent,
    PaletteThemeDisplayComponent,
    DisplayHeaderComponent,
    DisplayPageComponent,
    DisplayMainBlurbComponent,
    DisplayHeaderBannerComponent
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
    MatDialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
