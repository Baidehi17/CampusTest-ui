import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsAndQuestionComponent } from './skills-and-question/skills-and-question.component';
import { ButtonModule } from 'primeng/button';

import { SidebarModule } from 'primeng/sidebar';
import { SkillsAndQuestionCardComponent } from './skills-and-question-card/skills-and-question-card.component';
import { PopUpFormComponent } from './pop-up-form/pop-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SkillsAndQuestionComponent,
    SkillsAndQuestionCardComponent,
    PopUpFormComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    ReactiveFormsModule
  ],
  exports:[
    SkillsAndQuestionComponent
  ]
})
export class QuestionBankModule { }
