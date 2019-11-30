import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Photos } from './photos';
import { ALBUMS } from './albums';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  static nextPhotosId = 100;
  private albums$: BehaviorSubject<Photos[]> = new BehaviorSubject<Photos[]>(ALBUMS);

  constructor() { }

  getAlbum() { return this.albums$; }

  getPhotos(id: string ) {
    return this.getAlbum().pipe(
      map(photos => photos.find(photos => photos.name === id))
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
