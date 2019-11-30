import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar.service';

@Component({
  selector: 'app-pottery',
  templateUrl: './pottery.component.html',
  styleUrls: ['./pottery.component.css']
})
export class PotteryComponent implements OnInit {

  constructor(
    public nav: NavbarService,
  ) {
  }

  ngOnInit() {
      this.nav.show();
      this.nav.setDeg(270);
  }

}
