import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { CartService } from './cart.service';
import { NavbarService } from './navbar.service';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
//import { GALLERY_CONFIG } from '@ngx-gallery/core';
//import { LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    GallerizeModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule.withConfig({
      panelClass: 'fullscreen',
    }),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CartComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    CartService,
    NavbarService,
  ],
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
