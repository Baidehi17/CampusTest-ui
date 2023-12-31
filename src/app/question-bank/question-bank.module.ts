import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsAndQuestionComponent } from './skills-and-question/skills-and-question.component';
import { ButtonModule } from 'primeng/button';

import { SidebarModule } from 'primeng/sidebar';
import { SkillsAndQuestionCardComponent } from './skills-and-question-card/skills-and-question-card.component';
@NgModule({
  declarations: [
    SkillsAndQuestionComponent,
    SkillsAndQuestionCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule
  ],
  exports:[
    SkillsAndQuestionComponent
  ]
})
export class QuestionBankModule { }
