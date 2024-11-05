import {
  CdkListboxModule,
  ListboxValueChangeEvent,
} from "@angular/cdk/listbox";
import {
  Component,
  forwardRef,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DropdownOptions } from "./dropdown.types";
import { CommonModule } from "@angular/common";
import { ConnectedPosition, OverlayModule } from "@angular/cdk/overlay";
import { SwIconComponent } from "../icon/icon.component";
import { SwInputComponent } from "../input/input.component";
import { SwAllowedSizes } from "../../shared/constants";

@Component({
  selector: "sw-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwDropdownComponent),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    SwIconComponent,
    CdkListboxModule,
    SwInputComponent,
  ],
})
export class SwDropdownComponent implements ControlValueAccessor {
  private _options: DropdownOptions[] = [];

  @Input()
  set options(options: DropdownOptions[]) {
    this._options = options;
    this._valueLabelMap = new Map(
      options.map((option) => [option.value, option.label]),
    );
  }

  get options() {
    return this._options;
  }

  @Input() placeholder: string = "";

  @Input() size: SwAllowedSizes = "md";

  private _valueLabelMap: Map<unknown, string> = new Map();

  public isOpen: boolean = false;

  public selectedValues: string[] = [];

  public onChangeFn: Function | null = null;

  public onTouchFn: Function | null = null;

  public readonly position: ConnectedPosition = {
    originX: "center",
    originY: "bottom",
    overlayX: "center",
    overlayY: "top",
    offsetY: 5,
  };

  constructor() {}

  public onClickOutside() {
    this.isOpen = false;
  }

  get selectedValueLabel() {
    return this.selectedValues
      ? this.selectedValues
          .map((selectedValue) => this._valueLabelMap.get(selectedValue))
          .join(", ")
      : "";
  }

  public writeValue(value: string[]): void {
    this.selectedValues = value;
  }

  registerOnChange(fn: Function): void {
    this.onChangeFn = fn;
  }

  onUpdateValue(updatedValue: string[]) {
    this.selectedValues = updatedValue;
    if (this.onChangeFn) {
      this.onChangeFn(this.selectedValues ? this.selectedValues[0] : null);
    }
  }

  registerOnTouched(fn: Function): void {
    this.onTouchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  public onValueChange(event: ListboxValueChangeEvent<string>) {
    this.onUpdateValue(event.value as string[]);
    this.isOpen = false;
  }

  public trackDropdownOption(index: number, option: DropdownOptions) {
    return option.value;
  }

  public onClearValue(event: MouseEvent) {
    event.stopPropagation();
    this.onUpdateValue([]);
  }
}
