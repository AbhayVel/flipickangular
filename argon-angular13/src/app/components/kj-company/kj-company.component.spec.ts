import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjCompanyComponent } from './kj-company.component';

describe('KjCompanyComponent', () => {
  let component: KjCompanyComponent;
  let fixture: ComponentFixture<KjCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KjCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KjCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
