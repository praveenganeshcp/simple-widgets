import { Component, Input } from '@angular/core';
import { SwAllowedSizes } from '../../../../shared/constants';
import { CanBeNull } from '../../../../shared/types';
import { SwDialogRef } from '../../models/dialog.ref';

@Component({
  selector: 'sw-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class SwDialogComponent {
  constructor(private dialogRef: SwDialogRef<any>) {}

  @Input() size: CanBeNull<SwAllowedSizes> = 'md';

  public get isSmallSize(): boolean {
    return this.size === 'sm';
  }

  public get isMediumSize(): boolean {
    return this.size === 'md';
  }

  public get isLargeSize(): boolean {
    return this.size === 'lg';
  }

  public onCloseModal() {
    this.dialogRef.close(null);
  }

  public onPreventPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
