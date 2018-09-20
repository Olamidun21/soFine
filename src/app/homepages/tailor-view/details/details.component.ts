import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  clientall = false;
  detailall = true;

  constructor() { }

  ngOnInit() {
  }
  changeit(ticket){
    var result = (ticket == 'cli')?this.clientall=true:this.clientall=false;
    var result = (ticket == 'det')?this.detailall=true:this.detailall=false;
  }

}
