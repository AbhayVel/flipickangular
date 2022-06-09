import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KjEventComponent } from './kj-event.component';

describe('KjEventComponent', () => {
  let component: KjEventComponent;
  let fixture: ComponentFixture<KjEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KjEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KjEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
