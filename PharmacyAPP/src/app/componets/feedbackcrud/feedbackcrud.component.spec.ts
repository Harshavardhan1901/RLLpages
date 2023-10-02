import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcrudComponent } from './feedbackcrud.component';

describe('FeedbackcrudComponent', () => {
  let component: FeedbackcrudComponent;
  let fixture: ComponentFixture<FeedbackcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackcrudComponent]
    });
    fixture = TestBed.createComponent(FeedbackcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
