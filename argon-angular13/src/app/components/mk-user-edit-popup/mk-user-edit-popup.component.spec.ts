import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkUserEditPopupComponent } from './mk-user-edit-popup.component';

describe('MkUserEditPopupComponent', () => {
  let component: MkUserEditPopupComponent;
  let fixture: ComponentFixture<MkUserEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkUserEditPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkUserEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
