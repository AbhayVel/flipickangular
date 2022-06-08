import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkEmployeeDetailsComponent } from './mk-employee-details.component';

describe('MkEmployeeDetailsComponent', () => {
  let component: MkEmployeeDetailsComponent;
  let fixture: ComponentFixture<MkEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkEmployeeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
