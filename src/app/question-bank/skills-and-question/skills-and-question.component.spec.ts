import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndQuestionComponent } from './skills-and-question.component';

describe('SkillsAndQuestionComponent', () => {
  let component: SkillsAndQuestionComponent;
  let fixture: ComponentFixture<SkillsAndQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsAndQuestionComponent]
    });
    fixture = TestBed.createComponent(SkillsAndQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
