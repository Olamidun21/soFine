import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DatasetService } from 'c:/users/user/sofine/src/app/dataset.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  first ='';
  last='';
  countrt=''; 
  state=''; 
  constructor() { }

  ngOnInit() {
    
  }

}
