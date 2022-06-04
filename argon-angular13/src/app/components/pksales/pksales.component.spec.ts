import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PksalesComponent } from './pksales.component';

describe('PksalesComponent', () => {
  let component: PksalesComponent;
  let fixture: ComponentFixture<PksalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PksalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PksalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
