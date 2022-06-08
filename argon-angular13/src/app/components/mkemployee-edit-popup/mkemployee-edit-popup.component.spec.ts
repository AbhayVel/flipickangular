import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkemployeeEditPopupComponent } from './mkemployee-edit-popup.component';

describe('MkemployeeEditPopupComponent', () => {
  let component: MkemployeeEditPopupComponent;
  let fixture: ComponentFixture<MkemployeeEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkemployeeEditPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkemployeeEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
