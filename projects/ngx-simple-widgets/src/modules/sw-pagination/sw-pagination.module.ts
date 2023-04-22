import { NgModule } from "@angular/core";
import { SwPaginationComponent } from "./components/sw-pagination/sw-pagination.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [SwPaginationComponent],
    exports: [SwPaginationComponent]
})
export class SwPaginationModule {}