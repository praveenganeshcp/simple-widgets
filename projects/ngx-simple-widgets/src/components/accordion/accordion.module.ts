import { CdkAccordionModule } from "@angular/cdk/accordion";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SwIconComponent } from "../icon/icon.component";
import { SwAccordionComponent } from "./accordion/accordion.component";
import { SwAccordionBodyComponent } from "./accordion-body/accordion-body.component";
import { SwAccordionTitleComponent } from "./accordion-title/accordion-title.component";

@NgModule({
  declarations: [
    SwAccordionComponent,
    SwAccordionBodyComponent,
    SwAccordionTitleComponent,
  ],
  imports: [CommonModule, CdkAccordionModule, SwIconComponent],
  exports: [
    SwAccordionBodyComponent,
    SwAccordionComponent,
    SwAccordionTitleComponent,
  ],
})
export class SwAccordionModule {}
