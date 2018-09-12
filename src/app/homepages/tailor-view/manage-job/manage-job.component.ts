import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasetService } from 'c:/users/user/sofine/src/app/dataset.service';
export interface gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-manage-job',
  templateUrl: './manage-job.component.html',
  styleUrls: ['./manage-job.component.css']
})
export class ManageJobComponent implements OnInit {

  genders:gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  constructor(private serve : DatasetService, private router : Router) { 
    
  }

  ngOnInit() {
  }

}
