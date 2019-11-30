import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

import { SelectivePreloadingStrategyService } from './selective-preload-strat.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'photography',
    loadChildren: () => import('./photography/photography.module').then(mod => mod.PhotographyModule), data: { preload: true }
  },
  {
    path: 'pottery',
    loadChildren: () => import('./pottery/pottery.module').then(mod => mod.PotteryModule), data: { preload: true }
  },
  //{ path: 'pottery/:potteryId', component: PotteryDetailsComponent },
  { path: 'cart', component: CartComponent },
];


//  path: 'crisis-center',
//  loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
//  data: { preload: true }

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        //  enableTracing: true,
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
