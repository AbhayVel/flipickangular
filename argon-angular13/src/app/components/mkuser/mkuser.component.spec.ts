import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkuserComponent } from './mkuser.component';

describe('MkuserComponent', () => {
  let component: MkuserComponent;
  let fixture: ComponentFixture<MkuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
