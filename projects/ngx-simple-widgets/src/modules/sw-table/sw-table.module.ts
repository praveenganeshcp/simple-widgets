import { NgModule } from "@angular/core";
import { SwTableComponent } from "./components/sw-table/sw-table.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [SwTableComponent],
    exports: [SwTableComponent]
})
export class SwTableModule {}