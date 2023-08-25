import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndQuestionCardComponent } from './skills-and-question-card.component';

describe('SkillsAndQuestionCardComponent', () => {
  let component: SkillsAndQuestionCardComponent;
  let fixture: ComponentFixture<SkillsAndQuestionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsAndQuestionCardComponent]
    });
    fixture = TestBed.createComponent(SkillsAndQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
