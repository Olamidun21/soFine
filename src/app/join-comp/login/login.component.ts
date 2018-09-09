import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wait:boolean = false;
  constructor() { }
  // submit(form){
  //   this.wait = true
  //   setTimeout(()=>{
  //       alert('Email is ${form.value.email} and password is ${form.value.password}');
  //       this.wait = false
  //   },1000)
  // }
  ngOnInit() {
  }

}
