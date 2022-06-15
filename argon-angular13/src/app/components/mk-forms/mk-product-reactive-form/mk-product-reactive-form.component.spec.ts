import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkProductReactiveFormComponent } from './mk-product-reactive-form.component';

describe('MkProductReactiveFormComponent', () => {
  let component: MkProductReactiveFormComponent;
  let fixture: ComponentFixture<MkProductReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkProductReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkProductReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
