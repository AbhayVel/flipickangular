import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjAuthorComponent } from './kj-author.component';

describe('KjAuthorComponent', () => {
  let component: KjAuthorComponent;
  let fixture: ComponentFixture<KjAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KjAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KjAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
