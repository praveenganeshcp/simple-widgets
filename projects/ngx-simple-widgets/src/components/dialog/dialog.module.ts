import { NgModule } from "@angular/core";
import { SwDialogService } from "./services/dialog.service";
import { OverlayModule } from "@angular/cdk/overlay";
import { SwDialogComponent } from "./components/dialog/dialog.component";

@NgModule({
  declarations: [SwDialogComponent],
  imports: [OverlayModule],
  providers: [SwDialogService],
  exports: [SwDialogComponent],
})
export class SwDialogModule {}
