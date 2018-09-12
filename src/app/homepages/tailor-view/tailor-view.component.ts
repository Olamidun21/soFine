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
  menu(take) { 
    var result = (take=='home')?this.tailor=true:this.tailor=false;
    var result = (take=='managejobs')?this.manage=true:this.manage=false;
    var result = (take=='clients')?this.client=true:this.client=false;
    var result = (take=='myearnings')?this.earning=true:this.earning=false;
    var result = (take=='myservices')?this.services=true:this.services=false;
    var result = (take=='myprofile')?this.profile=true:this.profile=false;
    var result = (take=='mysupport')?this.dashboardsupport=true:this.dashboardsupport=false;
  }
  // home = function()
  // {
  //  this.tailor = true;
  //  this.manage = false;
  //  this.earning = false;
  //  this.client = false;
  //  this.services = false;
  //  this.profile = false;
  //  this.dashboardsupport = false;
  // }
  // managejobs = function(){
  //   this.tailor = false;
  //   this.manage = true;
  //   this.earning = false;
  //  this.client = false;
  //  this.services = false;
  //  this.profile = false;
  //  this.dashboardsupport = false;
  //   // document.getElementById("sidenav").style.width = "0px";
  // }
  // clients = function(){
  //   this.tailor = false;
  //   this.manage = false;
  //   this.earning = false;
  //  this.client = true;
  //  this.services = false;
  //  this.profile = false;
  //  this.dashboardsupport = false;
  // }
  // myservices = function(){
  //   this.tailor = false;
  //   this.manage = false;
  //   this.earning = false;
  //  this.client = false;
  //  this.services = true;
  //  this.profile = false;
  //  this.dashboardsupport = false;
  // }
  // myprofile = function(){
  //   this.tailor = false;
  //   this.manage = false;
  //   this.earning = false;
  //  this.client = false;
  //  this.services = false;
  //  this.profile = true;
  //  this.dashboardsupport = false;
  // }
  // myearnings = function(){
  //   this.tailor = false;
  //   this.manage = false;
  //   this.earning = true;
  //  this.client = false;
  //  this.services = false;
  //  this.profile = false;
  //  this.dashboardsupport = false;
  // }
  // mysupport = function(){
  //   this.tailor = false;
  //   this.manage = false;
  //   this.earning = false;
  //  this.client = false;
  //  this.services = false;
  //  this.profile = false;
  //  this.dashboardsupport = true;
  // }


}
