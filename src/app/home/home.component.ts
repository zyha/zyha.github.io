import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { GalleryComponent, GalleryItem, Gallery, ImageItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { map } from 'rxjs/operators';
import { ALBUMS } from '../photography/albums';
import { Photos } from '../photography/photos'
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: GalleryItem[];
  screenHeight: number;
  screenWidth: number;
  images_0 = ALBUMS[0].imgs;

  gallery_play: boolean = true;
  constructor(
    public nav: NavbarService,
    private gallery: Gallery,
  ) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.nav.show();
    this.nav.setDeg(0);

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.items = this.images_0.map(item => new ImageItem({ src: item.srcUrl, thumb: item.preUrl }));
    this.gallery.ref('homegallery', {
      //loadingMode: 'indeterminate',
      //thumb: false,
      //thumbTemplate:,
      //counter: false,
      //autoPlay: true,
      //playerInterval: 5000,
      //thumbClick: this.gallery.ref().setConfig({
      //autoPlay: !this.gallery_play}),
    }).load(this.items);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

}
