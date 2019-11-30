import { Component, OnInit, HostBinding } from '@angular/core';
import { GalleryComponent, Gallery } from '@ngx-gallery/core';
import { ActivatedRoute} from '@angular/router';

import { Pots } from '../pots'
import { Pot } from '../pot'

import { HostListener } from "@angular/core";
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-pot-detail',
  templateUrl: './pot-detail.component.html',
  styleUrls: ['./pot-detail.component.css'],
})

export class PotDetailComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;

  name: string;
  pots: Pot[];

  constructor(
    gallery: Gallery,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.getScreenSize();
    gallery.ref("gal").setConfig({
      thumb: false,
      loadingMode: 'indeterminate',
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { pots: Pots }) => {
        this.pots = data.pots.pots;
        this.name = data.pots.name;
      });
  }


  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  share() {
    window.alert('The product has been shared!');
  }
  addToCart(pottery) {
    window.alert('Your ' + pottery.name + ' has been added to the cart!');
    this.cartService.addToCart(pottery);
  }
  available(pottery) {
    if (this.cartService.notInCart(pottery) < 0 && pottery.status == 1) {
      return 1;
    }
    else {
      return 0;
    }
  }

}
