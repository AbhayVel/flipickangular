import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmQuestionBankComponent } from './vm-question-bank.component';

describe('VmQuestionBankComponent', () => {
  let component: VmQuestionBankComponent;
  let fixture: ComponentFixture<VmQuestionBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmQuestionBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmQuestionBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
