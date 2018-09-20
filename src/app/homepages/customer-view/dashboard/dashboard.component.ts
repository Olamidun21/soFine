import { Component, Injectable, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboard = true;
  categories = false;
  profile = false;
  notifications = false;
  inbox = false;
  setting = false;
   dashboardsupport = false;
 
      isHandset: Observable<BreakpointState> =this.breakpointObserver.observe(Breakpoints.Handset);
  // cards = [  
  //   { title: 'Beta 1', cols: 2, rows: 1 },  
  //   { title: 'Beta 2', cols: 1, rows: 1 },  
  //   { title: 'Beta 3', cols: 1, rows: 2 },  
  //   { title: 'Beta 4', cols: 1, rows: 1 }  
  // ];  
  // panelOpenState = false;
  constructor(private breakpointObserver: BreakpointObserver) {}  

  ngOnInit() {
  }

  menu(take) { 
    var result = (take=='dashboard')?this.dashboard=true:this.dashboard=false;
    var result = (take=='categories')?this.categories=true:this.categories=false;
    var result = (take == 'myprofile')?this.profile=true:this.profile=false;
    var result = (take == 'myinbox')?this.inbox=true:this.inbox=false;
    var result = (take == 'mynotifi')?this.notifications=true:this.notifications=false;
    var result = (take == 'mysupport')?this.dashboardsupport=true:this.dashboardsupport=false;
    var result = (take == 'myset')?this.setting=true:this.setting=false;
  }

}
