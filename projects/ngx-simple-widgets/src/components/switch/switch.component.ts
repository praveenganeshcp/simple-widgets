import { ChangeDetectionStrategy, Component, forwardRef } from "@angular/core";
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from "@angular/animations";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "sw-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.scss"],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger("switch-state", [
      state(
        "on",
        style({
          transform: "translate(25px, 0px)",
        }),
      ),
      state(
        "off",
        style({
          transform: "translate(0px, 0px)",
        }),
      ),
      transition("on <=> off", [animate("0.2s")]),
    ]),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwSwitchComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwSwitchComponent implements ControlValueAccessor {
  public state: boolean = false;

  private onChange: Function | null = null;

  private onTouched: Function | null = null;

  public writeValue(state: boolean): void {
    this.state = state;
  }

  public registerOnChange(onChange: Function): void {
    this.onChange = onChange;
  }

  public toggle() {
    this.state = !this.state;
    if (this.onChange) {
      this.onChange(this.state);
    }
  }

  public registerOnTouched(onTouched: Function): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
  }
}
