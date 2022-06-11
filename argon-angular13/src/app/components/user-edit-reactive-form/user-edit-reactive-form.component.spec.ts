import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditReactiveFormComponent } from './user-edit-reactive-form.component';

describe('UserEditReactiveFormComponent', () => {
  let component: UserEditReactiveFormComponent;
  let fixture: ComponentFixture<UserEditReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
