import { ChangeDetectionStrategy, Component, HostListener , OnInit, ViewChild} from '@angular/core';
import { ApiCallService } from 'src/app/service/api-call.service';
import { QuestionDetails } from 'src/app/model/QuestionDetails';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills-and-question',
  templateUrl: './skills-and-question.component.html',
  styleUrls: ['./skills-and-question.component.scss']

})


export class SkillsAndQuestionComponent implements OnInit{

  @ViewChild('popupTemplate') popupTemplate:any;

  screenWidth!: number;
  sidebarVisible: boolean = false;
  questionDetails :QuestionDetails[]=[];

  constructor(private skillTest: ApiCallService,private modalService: NgbModal) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.skillTest.GetQuestionDetials().subscribe(res=>{
      this.questionDetails = res;
      console.log(res);
    })
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event:any) {
  //   this.screenWidth = window.innerWidth;
  // }

  // openSidebar() {
  //   if (this.screenWidth >= 768 ||this.screenWidth >= 425 ||this.screenWidth >= 375 || this.screenWidth >= 320) {
  //     this.sidebarVisible = !this.sidebarVisible;
  //   }
  // }

  
  open() {
    this.modalService.open(this.popupTemplate);
  }

  close() {
    this.modalService.dismissAll();
  }
  addQuestionPaper(){

  }
}
