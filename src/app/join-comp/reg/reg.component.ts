import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatasetService } from 'c:/users/user/sofine/src/app/dataset.service';
import { Details } from 'c:/users/user/sofine/src/app/./details';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  public myForm : FormGroup;
  public reg = [];
  // isEditable = false;
  // frist ='';
  // last='';
  // country=''; 
  // state=''; 
  // email= '';
  // password= '';

  constructor(private fb : FormBuilder, private _serve: DatasetService) { }

  ngOnInit() { }

  submitForm(data){
    data.preventDefault();
    let target = data.target;
    let fullname = target.querySelector('#fullname').value;
    let gender = target.querySelector('#gender').value;
    let country = target.querySelector('#country').value;
    let state = target.querySelector('#state').value;
    let address = target.querySelector('#address').value;
    let phone = target.querySelector('#phone').value;
    let email = target.querySelector('#email').value;
    let username = target.querySelector('#username').value;
    let password = target.querySelector('#password').value;
    let category = target.querySelector('#category').value;
    let company = target.querySelector('#company').value;
    let companyAdd = target.querySelector('#companyAdd').value;
    this.reg.push(data);
    alert(this.reg);
    return this._serve.sendSubmit({
      fullname,gender,country,state,address,phone,email,username,password,category,company,companyAdd
    }); 
    // console.log(this.reg);  
  }
  
  }

