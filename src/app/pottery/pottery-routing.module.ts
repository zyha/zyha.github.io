import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PotListComponent } from './pot-list/pot-list.component';
import { PotteryComponent } from './pottery/pottery.component';
import { PotDetailComponent } from './pot-detail/pot-detail.component';

import { PotDetailResolverService }    from './pot-detail-resolver.service';

const potCenterRoutes: Routes = [
  {
    path: '',
    component: PotteryComponent,
    children: [
      {
        path: '',
        component: PotListComponent,
        children: [
          {
            path: ':name',
            component: PotDetailComponent,
            resolve: { pots: PotDetailResolverService},
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(potCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PotCenterRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
