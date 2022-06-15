import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkProductTemplateFormComponent } from './mk-product-template-form.component';

describe('MkProductTemplateFormComponent', () => {
  let component: MkProductTemplateFormComponent;
  let fixture: ComponentFixture<MkProductTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkProductTemplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MkProductTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
