import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { SwIconComponent } from './component/sw-icon/sw-icon.component';


@NgModule({
  declarations: [
    SwIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SwIconComponent
  ]
})
export class SwIconModule { }
