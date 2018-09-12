import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  inbox= true;
  chat= false;

  tabLoadTimes: Date[] = [];
  constructor() { }
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 5, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 5, color: '#DDBDF1'},
  ];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  ngOnInit() {
  }

  message= function(){
    this.chat= false;
    this.inbox= true;

  }

  chatbox= function(){
    this.chat= true;
    this.inbox= false;
  }

}
