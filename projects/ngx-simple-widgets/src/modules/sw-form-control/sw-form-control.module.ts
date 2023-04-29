import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwFormControlComponent } from "./components/sw-form-control/sw-form-control.component";

@NgModule({
	imports: [
		CommonModule,
	],
    declarations: [
        SwFormControlComponent
    ],
    exports: [
        SwFormControlComponent
    ]
})
export class SwFormControlModule {}
