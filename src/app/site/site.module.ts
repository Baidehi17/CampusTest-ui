import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DigitalFutuerComponent } from './digital-futuer/digital-futuer.component';
import { DigitalExperiencesComponent } from './digital-experiences/digital-experiences.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { CutomersLoveUsComponent } from './cutomers-love-us/cutomers-love-us.component';
import { MainComponent } from './main/main.component';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ArticleComponent } from './article/article.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DigitalFutuerComponent,
    DigitalExperiencesComponent,
    WhatWeDoComponent,
    CutomersLoveUsComponent,
    MainComponent,
    ArticleComponent,
    
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    PanelModule
    
  ],
  exports: [
    MainComponent
  ]
})
export class SiteModule { }
