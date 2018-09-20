import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories = true;
  // dashboard = false;
  fabrics = false;

  constructor() { }

  ngOnInit() {
  }

  menu(take) { 
    var result = (take=='categories')?this.categories=true:this.categories=false;
    // var result = (take=='dashboard')?this.dashboard=true:this.dashboard=false;
    var result = (take=='fabrics')?this.fabrics=true:this.fabrics=false;
  }

}
