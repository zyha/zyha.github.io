import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotographyComponent } from './photography/photography.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

import { PhotoDetailResolverService }    from './photo-detail-resolver.service';

const photoCenterRoutes: Routes = [
  {
    path: '',
    component: PhotographyComponent,
    children: [
      {
        path: '',
        component: PhotoListComponent,
        children: [
          {
            path: ':name',
            component: PhotoDetailComponent,
            resolve: { photos: PhotoDetailResolverService},
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(photoCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PhotoCenterRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
