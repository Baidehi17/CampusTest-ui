import { ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ApiCallService } from 'src/app/service/api-call.service';
import { QuestionDetails } from 'src/app/model/QuestionDetails';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopUpEventService } from 'src/app/service/pop-up-event.service';

@Component({
  selector: 'app-skills-and-question',
  templateUrl: './skills-and-question.component.html',
  styleUrls: ['./skills-and-question.component.scss']

})


export class SkillsAndQuestionComponent implements OnInit {

  @ViewChild('popupTemplate') popupTemplate: any;

  id!: number;
  screenWidth!: number;
  sidebarVisible: boolean = false;
  questionDetails: QuestionDetails[] = [];
  closeResult: string = '';

  constructor(private skillTest: ApiCallService, private modalService: NgbModal) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.onload();
    PopUpEventService.reloadData.subscribe(res => {
      this.onload();
    })
  }
  onload() {
    this.skillTest.GetQuestionDetials().subscribe(res => {
      this.questionDetails = res;
    })
  }

  addQuestionPaper() {
    this.id = 0;
    this.modalService.open(this.popupTemplate);
  }

  editQuestionDetail(question: QuestionDetails) {
    if (question.id != 0) {
      this.id = question.id;
    }
    this.modalService.open(this.popupTemplate);
  }

  close() {
    this.modalService.dismissAll();
  }

  delete(question: QuestionDetails) {
    if (question.id != 0) {
      this.id = question.id;
    }
    this.modalService.open(this.popupTemplate);
  }
}
