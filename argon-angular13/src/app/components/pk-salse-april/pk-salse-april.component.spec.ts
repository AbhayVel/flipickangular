import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkSalseAprilComponent } from './pk-salse-april.component';

describe('PkSalseAprilComponent', () => {
  let component: PkSalseAprilComponent;
  let fixture: ComponentFixture<PkSalseAprilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkSalseAprilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkSalseAprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
