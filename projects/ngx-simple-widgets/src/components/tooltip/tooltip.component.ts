import { ConnectionPositionPair } from "@angular/cdk/overlay";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from "@angular/core";
import {
  SW_TOOLTIP_CONNECTED_POSITIONS,
  SW_TOOLTIP_POSITION,
} from "./tooltip.constants";
import { OverlayModule } from "@angular/cdk/overlay";
import { CommonModule } from "@angular/common";
import { CanBeNull } from "../../shared/types";

export const DEFAULT_TOOLTIP_POSITION = SW_TOOLTIP_POSITION.TOP;

@Component({
  selector: "sw-tooltip",
  standalone: true,
  templateUrl: "./tooltip.component.html",
  imports: [CommonModule, OverlayModule],
  styleUrls: ["./tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SwTooltipComponent {
  private isMouseHoveredOnElement: boolean = false;

  @Input() text: CanBeNull<string> = "";

  @Input() disable: CanBeNull<boolean> = false;

  private _position: ConnectionPositionPair =
    SW_TOOLTIP_CONNECTED_POSITIONS[DEFAULT_TOOLTIP_POSITION];

  @Input()
  set position(position: CanBeNull<SW_TOOLTIP_POSITION>) {
    this._position =
      SW_TOOLTIP_CONNECTED_POSITIONS[position || DEFAULT_TOOLTIP_POSITION];
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

  constructor() {}

  public get showTooltip(): boolean {
    return this.isMouseHoveredOnElement && (!this.disable as boolean);
  }
}
