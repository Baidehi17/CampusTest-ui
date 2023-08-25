import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {

  calender="assets/image/calendar.png"
  screenDetail = [
    {
      label: "SideBar",
      content: [
        { type: 'Text', value: 'Normal' },
        { type: 'Logo', value: 'assets/calendar.svg' },
        { type: 'BackgroundColor', value: '#2f4454' }
      ]
    },
    {
      label: "profile",
      content: [
        { type: 'Text', value: 'h4' },
        { type: 'Logo', value: '' },
        { type: 'button', value: 'btn btn-primary' }
      ]
    }
  ];
}
