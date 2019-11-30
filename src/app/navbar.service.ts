import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  visible: boolean;
  deg: number = 0; //degree of compass pointing
  constructor() { this.visible = false; }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  setDeg(degree){
    this.deg = degree;
  }
  getDeg(){
    return this.deg;
  }
}
