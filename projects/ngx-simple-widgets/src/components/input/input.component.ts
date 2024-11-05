import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostBinding,
} from "@angular/core";
import { SwAllowedSizes } from "../../shared/constants";
import { CanBeNull } from "../../shared/types";

type SwInputTheme = "normal" | "underlined";

@Component({
  selector: `
        input[type="text"][sw-input],
        input[type="number"][sw-input],
        input[type="password"][sw-input],
        input[type="email"][sw-input],
    `,
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SwInputComponent {
  @Input() size: CanBeNull<SwAllowedSizes> = "md";

  @Input() theme: CanBeNull<SwInputTheme> = "normal";

  private sizeCssClassMap: Record<SwAllowedSizes, string> = {
    sm: "sw-small-input",
    md: "sw-medium-input",
    lg: "sw-large-input",
  };

  constructor() {}

  @HostBinding("class") get inputClass(): string {
    return (
      this.sizeCssClassMap[this.size as SwAllowedSizes] +
      `${this.theme === "underlined" ? " sw-input-underlined" : ""}`
    );
  }
}
