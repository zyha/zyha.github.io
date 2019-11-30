import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Pots } from './pots';
import { KILN } from './kiln';

@Injectable({
  providedIn: 'root',
})
export class PotsService {
  static nextPotsId = 100;
  private kiln$: BehaviorSubject<Pots[]> = new BehaviorSubject<Pots[]>(KILN);

  constructor() { }

  getKiln() { return this.kiln$; }

  getPots(id: string ) {
    return this.getKiln().pipe(
      map(pots => pots.find(pots => pots.name === id))
    );
  }

  //addCrisis(name: string) {
//    name = name.trim();
  //  if (name) {
  //    let crisis = { id: CrisisService.nextCrisisId++, name };
  //    CRISES.push(crisis);
  //    this.crises$.next(CRISES);
  //  }
  //}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
