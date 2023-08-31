import { NgModule } from "@angular/core";
import { SwToastHostComponent } from './toast-host.component';
import { SwToastHostDemoComponent } from "./toast-host-demo.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { SwToastService } from "./services/toast.service";
import { CommonModule } from "@angular/common";
import { SwIconComponent } from "../icon/icon.component";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    SwIconComponent
  ],
  declarations: [
    SwToastHostComponent,
    SwToastHostDemoComponent,
  ],
  providers: [SwToastService],
  exports: [SwToastHostDemoComponent]
})
export class SwToastModule {}