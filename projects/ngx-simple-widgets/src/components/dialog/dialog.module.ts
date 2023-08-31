import { NgModule } from "@angular/core";
import { SwDialogService } from "./services/dialog.service";
import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
    imports: [OverlayModule],
    providers: [SwDialogService]
})
export class SwDialogModule {}