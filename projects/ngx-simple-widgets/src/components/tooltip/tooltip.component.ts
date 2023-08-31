import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SW_TOOLTIP_CONNECTED_POSITIONS, SW_TOOLTIP_POSITION } from './tooltip.constants';
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from '@angular/common';

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

  isOpen: boolean = false;

  @Input() text: string = '';

  @Input() show: boolean = true;

  private _position: ConnectionPositionPair = DEFAULT_TOOLTIP_POSITION;

  @Input()
  set position(position: SW_TOOLTIP_POSITION) {
    this._position = SW_TOOLTIP_CONNECTED_POSITIONS[position];
  }

  get connectedPositionStrategy() {
    return this._position;
  }

  constructor() { }

}
