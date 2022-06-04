import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAUsersComponent } from './uausers.component';

describe('UAUsersComponent', () => {
  let component: UAUsersComponent;
  let fixture: ComponentFixture<UAUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UAUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UAUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
