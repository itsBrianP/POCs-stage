import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PageOneComponent} from './pageOne/pageOne.component';
import {PageTwoComponent} from './pageTwo/pageTwo.component';
import {PageThreeComponent} from './pageThree/pageThree.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
