import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fh2020',
  templateUrl: './fh2020.component.html',
  styleUrls: ['./fh2020.component.scss'],
})
export class Fh2020Component implements OnInit {

  constructor() { }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  ngOnInit() {}

}
