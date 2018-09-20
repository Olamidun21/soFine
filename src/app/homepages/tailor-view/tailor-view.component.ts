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
   notifications = false;
   inbox = false;
   setting = false;
   dashboardsupport = false;


  constructor() { }

  ngOnInit() {
  }

  menu(take)
  {
    var result = (take == 'home')?this.tailor=true:this.tailor=false;
    var result = (take == 'managejobs')?this.manage=true:this.manage=false;
    var result = (take == 'myearnings')?this.earning=true:this.earning=false;
    var result = (take == 'myclients')?this.client=true:this.client=false;
    var result = (take == 'myservices')?this.services=true:this.services=false;
    var result = (take == 'myprofile')?this.profile=true:this.profile=false;
    var result = (take == 'myinbox')?this.inbox=true:this.inbox=false;
    var result = (take == 'mynotifi')?this.notifications=true:this.notifications=false;
    var result = (take == 'mysetting')?this.setting=true:this.setting=false;
    var result = (take == 'mysupport')?this.dashboardsupport=true:this.dashboardsupport=false;
  }

}
