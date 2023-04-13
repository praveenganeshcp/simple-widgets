import { NgModule } from "@angular/core";
import { SwInputComponent } from "./components/sw-input/sw-input.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SwInputComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SwInputComponent
    ]
})
export class SwInputModule {}