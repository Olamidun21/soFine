import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  manager = true;
  managejob = false;

  constructor() { }

  ngOnInit() {
  }
  change(tick){
    var result = (tick == 'man')?this.manager=true:this.manager=false;
    var result = (tick == 'managejobs')?this.managejob=true:this.managejob=false;
  }

}
