import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('0', style({ transform: 'rotate(0deg)' })),
      state('90', style({ transform: 'rotate(90deg)' })),
      state('180', style({ transform: 'rotate(180deg)' })),
      state('270', style({ transform: 'rotate(270deg)' })),
    ]),
    //  text-shadow:  1px 1px 2px #fff, 1px 1px 5px #03396c;
    trigger('selectN', [
      state('0', style({ color: "#767676", "text-shadow": "1px 1px 2px #fff, 1px 1px 5px #fff"})),
    ]),
    trigger('selectW', [
      state('270', style({ color: "#767676", "text-shadow": "1px 1px 2px #fff, 1px 1px 5px #fff"})),
    ]),
    trigger('selectE', [
      state('90', style({ color: "#767676", "text-shadow": "1px 1px 2px #fff, 1px 1px 5px #fff"})),
    ]),
    trigger('selectS', [
      state('180', style({  color: "#767676", "text-shadow": "1px 1px 2px #fff, 1px 1px 5px #fff" })),
    ]),
  ]
})
export class TopBarComponent implements OnInit {

  constructor(public nav: NavbarService) {
  }

  ngOnInit() {

  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
