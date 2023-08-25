import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { CardsComponent } from './cards/cards.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    SideBarComponent,
    MainScreenComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,

    ButtonModule
  ],
  exports:[
    MainScreenComponent
  ]
})
export class PrimeNgModule { }
