import { Component, Input, OnInit } from '@angular/core';
import { subQuestions } from 'src/app/model/subQuestions';
import { ApiCallService } from 'src/app/service/api-call.service';

@Component({
  selector: 'app-skills-and-question-card',
  templateUrl: './skills-and-question-card.component.html',
  styleUrls: ['./skills-and-question-card.component.scss']
})
export class SkillsAndQuestionCardComponent implements OnInit {


  @Input() id!: number;
  @Input() questionId!: number;

  subQuestion: subQuestions[] = [];

  constructor(private skillTest: ApiCallService) { }

  ngOnInit(): void {
    this.getsubQuestionDetails();
  }

  getsubQuestionDetails() {
    this.skillTest.getSubQuestionDetailsByID(this.id).subscribe(res => {
      this.subQuestion = res;
    })
  }
}
