import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-nav',
  templateUrl: './guest-nav.component.html',
  styleUrls: ['./guest-nav.component.css']
})
export class GuestNavComponent implements OnInit {
  guest = true;
  abt = false;
  pol = false;
  supp = false;
  login= false;
  reg = false;

  constructor() { }

  ngOnInit() {
  }
  side(show)
  {
    var view = (show == 'home')?this.guest=true:this.guest=false;
    var view = (show == 'about')?this.abt=true:this.abt=false;
    var view = (show == 'policy')?this.pol=true:this.pol=false;
    var view = (show == 'support')?this.supp=true:this.supp=false;
    var view = (show == 'login')?this.login=true:this.login=false;
    var view = (show == 'register')?this.reg=true:this.reg=false;    
  }

}
