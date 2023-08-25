import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionBankModule } from './question-bank/question-bank.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColorsComponent } from './color-display/colors/colors.component';
import { ColorDisplayModule } from './color-display/color-display.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SiteModule } from './site/site.module';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PanelModule,

    QuestionBankModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
