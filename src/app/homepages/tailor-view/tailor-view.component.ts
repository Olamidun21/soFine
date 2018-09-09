import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tailor-view',
  templateUrl: './tailor-view.component.html',
  styleUrls: ['./tailor-view.component.css']
})
export class TailorViewComponent implements OnInit {
  tailor = true;
   manage = false;
   earning = false;
   client = false;
   services = false;
   profile = false;
   dashboardsupport = false;

  constructor() { }

  ngOnInit() {
  }
  home = function()
  {
   this.tailor = true;
   this.manage = false;
   this.earning = false;
   this.client = false;
   this.services = false;
   this.profile = false;
   this.dashboardsupport = false;
  }
  managejobs = function(){
    this.tailor = false;
    this.manage = true;
    this.earning = false;
   this.client = false;
   this.services = false;
   this.profile = false;
   this.dashboardsupport = false;
    // document.getElementById("sidenav").style.width = "0px";
  }
  clients = function(){
    this.tailor = false;
    this.manage = false;
    this.earning = false;
   this.client = true;
   this.services = false;
   this.profile = false;
   this.dashboardsupport = false;
  }
  myservices = function(){
    this.tailor = false;
    this.manage = false;
    this.earning = false;
   this.client = false;
   this.services = true;
   this.profile = false;
   this.dashboardsupport = false;
  }
  myprofile = function(){
    this.tailor = false;
    this.manage = false;
    this.earning = false;
   this.client = false;
   this.services = false;
   this.profile = true;
   this.dashboardsupport = false;
  }
  myearnings = function(){
    this.tailor = false;
    this.manage = false;
    this.earning = true;
   this.client = false;
   this.services = false;
   this.profile = false;
   this.dashboardsupport = false;
  }
  mysupport = function(){
    this.tailor = false;
    this.manage = false;
    this.earning = false;
   this.client = false;
   this.services = false;
   this.profile = false;
   this.dashboardsupport = true;
  }


}
