import { NgModule } from "@angular/core";
import { SwToastHostComponent } from './components/sw-toast-host/sw-toast-host.component';
import { SwToastHostDemoComponent } from "./components/sw-toast-host/sw-toast-host-demo.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { SwToastService } from "./services/sw-toast.service";
import { SwIconModule } from "../sw-icon/sw-icon.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    SwIconModule
  ],
  declarations: [
    SwToastHostComponent,
    SwToastHostDemoComponent,
  ],
  providers: [SwToastService],
  exports: [SwToastHostDemoComponent]
})
export class SwToastModule {}