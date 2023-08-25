import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';



@NgModule({
  declarations: [
    ColorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ColorsComponent
  ]
})
export class ColorDisplayModule { }
