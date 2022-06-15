import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkProductEditPopupComponent } from './mk-product-edit-popup.component';

describe('MkProductEditPopupComponent', () => {
  let component: MkProductEditPopupComponent;
  let fixture: ComponentFixture<MkProductEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkProductEditPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkProductEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
