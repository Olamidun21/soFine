import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// import {Component} from '@angular/core';

// /**
//  * @title Basic slide-toggles
//  */
// @Component({
//   selector: 'slide-toggle-overview-example',
//   templateUrl: 'slide-toggle-overview-example.html',
//   styleUrls: ['slide-toggle-overview-example.css'],
// })
// export class SlideToggleOverviewExample {}
// import {Component} from '@angular/core';

// /**
//  * @title Basic cards
//  */
// @Component({
//   selector: 'card-overview-example',
//   templateUrl: 'card-overview-example.html',
//   styleUrls: ['card-overview-example.css'],
// })
// export class CardOverviewExample {}
