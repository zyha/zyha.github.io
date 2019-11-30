import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute}     from '@angular/router';
import { Observable }     from 'rxjs';
import { switchMap }      from 'rxjs/operators';

import { Pots }         from '../pots';
import { PotsService }  from '../pottery.service';

@Component({
  selector: 'app-pot-list',
  templateUrl: './pot-list.component.html',
  styleUrls: ['./pot-list.component.css']
})
export class PotListComponent implements OnInit {
  kiln$: Observable<Pots[]>;

  constructor(
    private service: PotsService,
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    this.kiln$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.service.getKiln();
      })
    );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
