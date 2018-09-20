import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  manager = false;
  managejob = true;

  genders:gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  // constructor(private serve : DatasetService, private router : Router) { 
    
  // }

  ngOnInit() {
  }

  change(tick){
    var result = (tick == 'man')?this.manager=true:this.manager=false;
    var result = (tick == 'managejobs')?this.managejob=true:this.managejob=false;
  }

}
