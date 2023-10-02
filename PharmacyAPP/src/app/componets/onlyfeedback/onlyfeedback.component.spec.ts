import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyfeedbackComponent } from './onlyfeedback.component';

describe('OnlyfeedbackComponent', () => {
  let component: OnlyfeedbackComponent;
  let fixture: ComponentFixture<OnlyfeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlyfeedbackComponent]
    });
    fixture = TestBed.createComponent(OnlyfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
