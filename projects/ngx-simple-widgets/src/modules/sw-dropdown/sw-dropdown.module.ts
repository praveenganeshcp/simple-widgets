import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CdkListboxModule } from "@angular/cdk/listbox";
import { SwDropdownInputComponent } from './components/sw-dropdown-input/sw-dropdown-input.component';

@NgModule({
  imports: [
    OverlayModule,
    CommonModule,
    CdkListboxModule
  ],
  declarations: [
    SwDropdownInputComponent,
  ],
  exports: [
    SwDropdownInputComponent
  ]
})
export class SwDropDownModule {}