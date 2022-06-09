import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjCourseComponent } from './kj-course.component';

describe('KjCourseComponent', () => {
  let component: KjCourseComponent;
  let fixture: ComponentFixture<KjCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KjCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KjCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
