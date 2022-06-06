import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkSalseMayComponent } from './pk-salse-may.component';

describe('PkSalseMayComponent', () => {
  let component: PkSalseMayComponent;
  let fixture: ComponentFixture<PkSalseMayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkSalseMayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkSalseMayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
