import { Component, Input } from '@angular/core';
import { SwAllowedSizes } from "../../../../shared/constants";

@Component({
  selector: 'sw-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class SwDialogComponent {

  @Input() size: SwAllowedSizes = "md";

  public get isSmallSize(): boolean {
    return this.size === "sm";
  }

  public get isMediumSize(): boolean {
    return this.size === "md";
  }

  public get isLargeSize(): boolean {
    return this.size === "lg";
  }

}
