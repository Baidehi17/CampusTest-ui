import { Component } from '@angular/core';
import { FooterContent } from 'src/app/model/FooterContent';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  footerContent: FooterContent[] = [{
    title: 'Services',
    child: ['Cloud', 'Modern Data Analytics', 'Data Science', 'Product Engineering', 'Digital transformation services', ' Quality Engineering', 'UX design']
  },
  {
    title: 'Insights',
    child: ['Blog', 'White Papers', 'Case studies', 'Brochures', 'Webinar']
  },
  {
    title: 'About',
    child: ['About Us', 'Core Values', 'Our Quality', 'Careers', 'Contact Us']
  },
  {
    title: 'Locations',
    child: ['6010 W Spring Creek Pkwy,', 'Plano, TX 75024', '+1 (425) 943-9412']
  },
  {
    title: ' ',
    child: ['Incor 9, 5th Floor, Kavuri Hills,', 'Madhapur, Telangana 500033', '+91 931-131-2323']
  },
  {
    title: ' ',
    child: ['600 Stewart Street, Suite 400', 'Seattle, WA 98101', '+1 (425) 943-9412']
  },
  {
    title: ' ',
    child: ['Level 2, Invaders Bay Tower,', 'Port of Spain, Trinidad & Tobago', '+1 (425) 943-9412']
  }
  ];
}
