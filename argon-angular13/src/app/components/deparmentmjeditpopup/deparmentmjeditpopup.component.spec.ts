import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentmjeditpopupComponent } from './deparmentmjeditpopup.component';

describe('DeparmentmjeditpopupComponent', () => {
  let component: DeparmentmjeditpopupComponent;
  let fixture: ComponentFixture<DeparmentmjeditpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparmentmjeditpopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentmjeditpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
