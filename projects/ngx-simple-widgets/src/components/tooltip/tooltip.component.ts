import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SW_TOOLTIP_CONNECTED_POSITIONS, SW_TOOLTIP_POSITION } from './tooltip.constants';
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from '@angular/common';
import { CanBeNull } from "../../shared/types";

export const DEFAULT_TOOLTIP_POSITION = SW_TOOLTIP_CONNECTED_POSITIONS[
  SW_TOOLTIP_POSITION.TOP
];

@Component({
  selector: 'sw-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  imports: [CommonModule, OverlayModule],
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwTooltipComponent {

  private isMouseHoveredOnElement: boolean = false;

  @Input() text: CanBeNull<string> = '';

  @Input() show: CanBeNull<boolean> = true;

  private _position: ConnectionPositionPair = DEFAULT_TOOLTIP_POSITION;

  @Input()
  set position(position: CanBeNull<SW_TOOLTIP_POSITION>) {
    this._position = SW_TOOLTIP_CONNECTED_POSITIONS[position || SW_TOOLTIP_POSITION.TOP];
  }

  get connectedPositionStrategy() {
    return this._position;
  }

  public onMouseLeave() {
    this.isMouseHoveredOnElement = false;
  }

  public onMouseEnter() {
    this.isMouseHoveredOnElement = true;
  }

  constructor() { }

  public get showTooltip(): boolean {
    return this.isMouseHoveredOnElement && this.show as boolean;
  }

}
