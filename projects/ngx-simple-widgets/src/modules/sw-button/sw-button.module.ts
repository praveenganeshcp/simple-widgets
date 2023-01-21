import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwButtonComponent } from './components/sw-button/sw-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SwButtonComponent
  ],
  exports: [
    SwButtonComponent
  ]
})
export class SwButtonModule {}