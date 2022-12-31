import { NgModule } from "@angular/core";
import { SwSwitchComponent } from "./components/sw-switch/sw-switch.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    imports: [BrowserAnimationsModule],
    declarations: [SwSwitchComponent],
    exports: [SwSwitchComponent]
})
export class SwSwitchModule {}