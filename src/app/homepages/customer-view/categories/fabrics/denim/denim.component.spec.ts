import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenimComponent } from './denim.component';

describe('DenimComponent', () => {
  let component: DenimComponent;
  let fixture: ComponentFixture<DenimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
