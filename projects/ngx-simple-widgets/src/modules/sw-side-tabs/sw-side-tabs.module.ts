import { NgModule } from "@angular/core";
import { SwSideTabTitleComponent } from "./components/sw-side-tab-title/sw-side-tab-title.component";
import { SwSideTabComponent } from "./components/sw-side-tab/sw-side-tab.component";
import { SwSideTabsHostComponent } from "./components/sw-side-tabs-host/sw-side-tabs-host.component";
import { CommonModule } from "@angular/common";
import { SwSideTabContentComponent } from './components/sw-side-tab-content/sw-side-tab-content.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SwSideTabsHostComponent,
        SwSideTabTitleComponent,
        SwSideTabComponent,
        SwSideTabContentComponent
    ],
    exports: [
        SwSideTabsHostComponent,
        SwSideTabTitleComponent,
        SwSideTabComponent,
        SwSideTabContentComponent
    ]
})
export class SwSideTabsModule {}
