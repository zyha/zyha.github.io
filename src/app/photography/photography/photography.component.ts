import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  constructor(
    public nav: NavbarService,
  ) {
  }

  ngOnInit() {

      this.nav.show();
      this.nav.setDeg(90);
  }

}
