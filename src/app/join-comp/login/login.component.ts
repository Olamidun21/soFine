import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'c:/users/user/sofine/src/app/details';
//import { LOGINS} from 'c:/users/user/sofine/src/app/mock-details';
import { DatasetService } from 'c:/users/user/sofine/src/app/dataset.service';



  //import { Detail } from '../details'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datas:Details[];
email="";
password="";
  constructor(private serve:DatasetService, private router:Router ) { }
 
  ngOnInit() {
    // this.processLogin();

  }
 processLogin() : void {
   this.serve.processLogin()
   .subscribe(data => this.datas = data );
   if(this.email == this.datas[1].email && this.password == this.datas[1].password){
    alert("Welcome " + this.datas[1].fullname);
    this.router.navigate(['dashboard'])
   }else{
     alert("incorrect email or password")
   }
   
  
 }
}
