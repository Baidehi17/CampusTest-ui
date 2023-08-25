import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHeaderScrolled = false;
  logoSrc = 'assets/technovert_logo_white (1).svg';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderScrolled = window.pageYOffset > 0;
    this.logoSrc = this.isHeaderScrolled ? 'assets/technovert_logo_blue.svg':'assets/technovert_logo_white (1).svg';
  }
}
