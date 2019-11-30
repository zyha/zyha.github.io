import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PhotoListComponent }       from './photo-list/photo-list.component';
import { PhotographyComponent }     from './photography/photography.component';
import { PhotoDetailComponent }     from './photo-detail/photo-detail.component';

import { PhotoCenterRoutingModule } from './photography-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GallerizeModule,
    AngularFontAwesomeModule,
    GalleryModule,
    LightboxModule.withConfig({
      panelClass: 'fullscreen',
    }),
    PhotoCenterRoutingModule,
  ],
  declarations: [
    PhotographyComponent,
    PhotoListComponent,
    PhotoDetailComponent,
  ]
})
export class PhotographyModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
