import { NgModule } from "@angular/core";
import { SwToastHostComponent } from './components/toast-host/toast-host.component';
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
    SwToastHostComponent
  ],
  providers: [SwToastService]
})
export class SwToastModule {}