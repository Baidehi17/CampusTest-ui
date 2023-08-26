import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.scss']
})
export class PopUpFormComponent {
  @Input() title!: string;
  @Input() message!: string;

  @ViewChild('popup') popup: any;

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    console.log("error messg component");
  }

  open() {
    this.modalService.open(this.popup);
  }

  close() {
    this.modalService.dismissAll();
  }
}
