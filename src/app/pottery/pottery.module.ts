import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PotListComponent }       from './pot-list/pot-list.component';
import { PotteryComponent }     from './pottery/pottery.component';
import { PotDetailComponent }     from './pot-detail/pot-detail.component';

import { PotCenterRoutingModule } from './pottery-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GallerizeModule,
    AngularFontAwesomeModule,
    GalleryModule,
    LightboxModule.withConfig({
      panelClass: 'fullscreen',
    }),
    PotCenterRoutingModule,
  ],
  declarations: [
    PotteryComponent,
    PotListComponent,
    PotDetailComponent,
  ]
})
export class PotteryModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
