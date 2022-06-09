import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaEmployeeEditPopupComponent } from './ua-employee-edit-popup.component';

describe('UaEmployeeEditPopupComponent', () => {
  let component: UaEmployeeEditPopupComponent;
  let fixture: ComponentFixture<UaEmployeeEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaEmployeeEditPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UaEmployeeEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
