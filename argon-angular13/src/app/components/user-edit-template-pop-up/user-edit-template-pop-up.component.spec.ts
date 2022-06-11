import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditTemplatePopUpComponent } from './user-edit-template-pop-up.component';

describe('UserEditTemplatePopUpComponent', () => {
  let component: UserEditTemplatePopUpComponent;
  let fixture: ComponentFixture<UserEditTemplatePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditTemplatePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditTemplatePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
