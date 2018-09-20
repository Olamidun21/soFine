import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatasetService } from 'src/app/dataset.service';
import { Details } from 'src/app/./details';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  frist ='';
  last='';
  country=''; 
  state=''; 
  email= '';
  password= '';

  constructor(private serve:DatasetService) { }

  ngOnInit() { }

  firstSubmit(): void{
    const regData= {
      email: this.email,
      password: this.password
    }
      this.serve.sendSubmit(regData);
     
    };
  }

