import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMJComponent } from './departments-mj.component';

describe('DepartmentsMJComponent', () => {
  let component: DepartmentsMJComponent;
  let fixture: ComponentFixture<DepartmentsMJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsMJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsMJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
