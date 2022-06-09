import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkProductsComponent } from './mk-products.component';

describe('MkProductsComponent', () => {
  let component: MkProductsComponent;
  let fixture: ComponentFixture<MkProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
