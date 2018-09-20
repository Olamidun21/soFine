import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientall = true;
  detailall = false;

  constructor() { }

  ngOnInit() {
  }
  changeit(ticket){
    var result = (ticket == 'cli')?this.clientall=true:this.clientall=false;
    var result = (ticket == 'det')?this.detailall=true:this.detailall=false;
  }

}
