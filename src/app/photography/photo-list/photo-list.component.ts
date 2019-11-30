import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { Photos }         from '../photos';
import { PhotosService }  from '../photos.service';
import { Observable }     from 'rxjs';
import { switchMap }      from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  albums$: Observable<Photos[]>;
  constructor(
    private service: PhotosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.albums$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getAlbum();
      })
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
