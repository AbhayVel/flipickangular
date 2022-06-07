import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MJEmployeeComponent } from './mj-employee.component';

describe('MJEmployeeComponent', () => {
  let component: MJEmployeeComponent;
  let fixture: ComponentFixture<MJEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MJEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MJEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
