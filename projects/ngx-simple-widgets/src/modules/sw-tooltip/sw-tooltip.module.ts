import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SwTooltipComponent } from './components/sw-tooltip/sw-tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [
    SwTooltipComponent
  ],
  exports: [
    SwTooltipComponent
  ]
})
export class SwTooltipModule {}