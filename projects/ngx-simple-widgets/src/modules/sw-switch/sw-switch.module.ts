import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwSwitchComponent } from "./components/sw-switch/sw-switch.component";

@NgModule({
	imports: [CommonModule],
    declarations: [SwSwitchComponent],
    exports: [SwSwitchComponent]
})
export class SwSwitchModule {}
