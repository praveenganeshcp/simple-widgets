import { NgModule } from "@angular/core";
import { SwDialogService } from "./services/sw-dialog.service";
import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
    imports: [ OverlayModule ],
    providers: [SwDialogService],
    declarations: [],
})
export class SwDialogModule {}