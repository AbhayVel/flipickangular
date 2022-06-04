import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VkcompComponent } from './vkcomp.component';

describe('VkcompComponent', () => {
  let component: VkcompComponent;
  let fixture: ComponentFixture<VkcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VkcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VkcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
