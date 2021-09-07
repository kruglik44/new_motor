import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autopark',
  templateUrl: './autopark.component.html',
  styleUrls: ['./autopark.component.scss'],
})
export class AutoparkComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  public selectCar(str){
    this.router.navigate([str]);
  }
}
