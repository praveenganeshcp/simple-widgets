import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CdkListboxModule } from "@angular/cdk/listbox";
import { SwDropdownInputComponent } from './components/sw-dropdown-input/sw-dropdown-input.component';
import { SwIconModule } from "../sw-icon/sw-icon.module";

@NgModule({
  imports: [
    OverlayModule,
    CommonModule,
    CdkListboxModule,
    SwIconModule,
  ],
  declarations: [
    SwDropdownInputComponent,
  ],
  exports: [
    SwDropdownInputComponent
  ]
})
export class SwDropDownModule {}