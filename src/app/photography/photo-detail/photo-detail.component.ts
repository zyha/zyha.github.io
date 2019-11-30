import { Component, OnInit, HostBinding } from '@angular/core';
import { GalleryComponent, Gallery } from '@ngx-gallery/core';
import { ActivatedRoute } from '@angular/router';

import { Photos } from '../photos'
import { Photo } from '../photo'

import { HostListener } from "@angular/core";


@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
})
export class PhotoDetailComponent implements OnInit {
  screenHeight: number;
  screenWidth: number;

  name: string;
  photos: Photo[];

  constructor(
    gallery: Gallery,
    private route: ActivatedRoute,
  ) {
    this.getScreenSize();
    gallery.ref("gal").setConfig({
      thumb: false,
      loadingMode: 'indeterminate',
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { photos: Photos }) => {
        this.photos = data.photos.imgs;
        this.name = data.photos.name;
      });
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

}
