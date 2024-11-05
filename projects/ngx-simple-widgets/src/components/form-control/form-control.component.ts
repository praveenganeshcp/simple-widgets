import { Component, Input, ContentChild } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SwInputComponent } from "../input/input.component";

@Component({
  selector: "sw-form-control",
  imports: [CommonModule],
  styleUrls: ["./form-control.component.scss"],
  templateUrl: "./form-control.component.html",
  standalone: true,
})
export class SwFormControlComponent {
  private _errorMessagesMap: Record<string, string> = {
    required: "This is a required field",
    email: "Enter valid email",
    duplicateEmailId: "EmailId already registered",
    strongPassword:
      "Password must contain atleast 1 uppercase, 1 lowercase and 1 number",
  };

  @Input() control!: AbstractControl | null;

  @Input() label: string = "";

  @Input()
  set errorMessagesMap(errorMessagesMap: Record<string, string>) {
    this._errorMessagesMap = {
      ...this._errorMessagesMap,
      ...errorMessagesMap,
    };
  }

  get errorMessagesMap(): Record<string, string> {
    return this._errorMessagesMap;
  }

  @ContentChild(SwInputComponent) input: SwInputComponent | null = null;

  public get labelAndErrorMsgFontClass(): string {
    const inputSize = this.input?.size;
    return inputSize === "lg"
      ? "sw-form-control-large-font"
      : inputSize === "md"
      ? "sw-form-control-medium-font"
      : "sw-form-control-small-font";
  }

  public get errorMessage(): string {
    const formControlError = this.control?.errors;
    return formControlError
      ? this.errorMessagesMap[Object.keys(formControlError)[0]]
      : "";
  }

  public get showErrorMessage(): boolean {
    return (this.errorMessage !== "" && this.control?.touched) || false;
  }
}
