import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SwFormControlComponent } from "./sw-form-control/sw-form-control.component";

@NgModule({
    imports: [
        BrowserAnimationsModule
    ],
    declarations: [
        SwFormControlComponent
    ],
    exports: [
        SwFormControlComponent
    ]
})
export class SwFormControlModule {}