import { NgModule } from "@angular/core";
import { SwToastHostComponent } from './components/sw-toast-host/sw-toast-host.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { SwToastService } from "./services/sw-toast.service";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [
    SwToastHostComponent
  ],
  providers: [SwToastService]
})
export class SwToastModule {}