import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { QuestionDetails } from 'src/app/model/QuestionDetails';
import { skillAndQuestion } from 'src/app/model/skills-and-question';
import { subQuestions } from 'src/app/model/subQuestions';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-skills-and-question-card',
  templateUrl: './skills-and-question-card.component.html',
  styleUrls: ['./skills-and-question-card.component.scss']
})
export class SkillsAndQuestionCardComponent implements OnInit {


  @Input() id!: number;

  subQuestion: subQuestions[] = [];
  skills: skillAndQuestion[] = [];

  constructor(private skillTest: ApiCallService) { }

  ngOnInit(): void {
    this.skillTest.skillAndQuestion().subscribe(res => {
      this.skills = res;
    })
    this.getsubQuestionDetails();
  }
  getsubQuestionDetails() {
    this.skillTest.getSubQuestionDetailsByID(this.id).subscribe(res => {
      console.log(res);
      this.subQuestion = res;
    })
  }
}
