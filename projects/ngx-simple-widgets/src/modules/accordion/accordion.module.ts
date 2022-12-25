import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkAccordionModule } from "@angular/cdk/accordion";

import { SwAccordionComponent } from './components/sw-accordion/sw-accordion.component';
import { SwIconModule } from '../sw-icon/sw-icon.module';
import { SwAccordionTitleComponent } from './components/sw-accordion-title/sw-accordion-title.component';
import { SwAccordionBodyComponent } from "./components/sw-accordion-body/sw-accordion-body.component";


@NgModule({
  declarations: [
    SwAccordionComponent,
    SwAccordionTitleComponent,
    SwAccordionBodyComponent
  ],
  imports: [
    CommonModule,
    CdkAccordionModule,
    SwIconModule
  ],
  exports: [
    SwAccordionComponent,
    SwAccordionTitleComponent,
    SwAccordionBodyComponent
  ]
})
export class SwAccordionModule { }
