import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-denim',
  templateUrl: './denim.component.html',
  styleUrls: ['./denim.component.css']
})
export class DenimComponent implements OnInit {
  denim = true;
  denim1 = false;

  constructor() { }

  ngOnInit() {
  }

  buy(take) { 
    var result = (take=='denim')?this.denim=true:this.denim=false;
    var result = (take=='denim1')?this.denim1=true:this.denim1=false;
  }

}
