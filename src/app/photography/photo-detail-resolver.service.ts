
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { PhotosService } from './photos.service';
import { Photos } from './photos';

@Injectable({
  providedIn: 'root',
})
export class PhotoDetailResolverService implements Resolve<Photos> {
  constructor(private ps: PhotosService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photos> | Observable<never> {
    let name = route.paramMap.get('name');

    return this.ps.getPhotos(name).pipe(
      take(1),
      mergeMap(photos => {
        if (photos) {
          return of(photos);
        } else { // id not found
          this.router.navigate(['/photography']);
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
