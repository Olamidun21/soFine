import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fabrics',
  templateUrl: './fabrics.component.html',
  styleUrls: ['./fabrics.component.css']
})
export class FabricsComponent implements OnInit {
  fabrics = true;
  denim = false;
  // categories = false;
  // dashboard = false;

  constructor() { }

  ngOnInit() {
  }

  menu(take) { 
    var result = (take=='denim')?this.denim=true:this.denim=false;
    var result = (take=='fabrics')?this.fabrics=true:this.fabrics=false;
    // var result = (take=='categories')?this.categories=true:this.categories=false;
    // var result = (take=='dashboard')?this.dashboard=true:this.dashboard=false;
  }

}
