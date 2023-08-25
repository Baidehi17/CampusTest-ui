import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isHeaderScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderScrolled = window.pageYOffset > 0;
  }
  
}
