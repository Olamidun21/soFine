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

}
