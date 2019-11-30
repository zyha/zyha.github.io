
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { PotsService } from './pottery.service';
import { Pots } from './pots';

@Injectable({
  providedIn: 'root',
})
export class PotDetailResolverService implements Resolve<Pots> {
  constructor(private ps: PotsService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pots> | Observable<never> {
    let name = route.paramMap.get('name');

    return this.ps.getPots(name).pipe(
      take(1),
      mergeMap(pots => {
        if (pots) {
          return of(pots);
        } else { // id not found
          this.router.navigate(['/pottery']);
          return EMPTY;
        }
      })
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
