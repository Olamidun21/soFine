import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'src/app/details';
//import { LOGINS} from 'c:/users/user/sofine/src/app/mock-details';
import { DatasetService } from 'src/app/dataset.service';



  //import { Detail } from '../details'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wait:boolean = false;
  submit(form){
    this.wait = true
    setTimeout(()=>{
        //alert('Email is ${form.value.email} and password is ${form.value.password}');
        this.wait = false
    },1000)
  };
  datas;
email="";
password="";
test=[];
  constructor(private serve:DatasetService, private router:Router ) {
    this.datas=this.serve.processLogin();
   }
 
  ngOnInit() {

  }
 processLogin() : void {  

   for (let i = 0; i < this.datas.length; i++) {
   if(this.email == this.datas[i].email && this.password == this.datas[i].password){
    this.router.navigate(['dashboard']);
    alert("Welcome " + this.datas[i].fullname);
    // this.serve.getUser(this.datas)

   }
  //  else{
  //    alert("incorrect email or password")
  //  }
  }
  
  }
}
