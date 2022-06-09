import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAEmployeesComponent } from './uaemployees.component';

describe('UAEmployeesComponent', () => {
  let component: UAEmployeesComponent;
  let fixture: ComponentFixture<UAEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UAEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UAEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
