import { SwButtonComponent } from "./button.component";
import { SwIconComponent } from "../icon/icon.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("button component should", () => {
  function mountPlainButtonComponent(type: string, size: string = "md") {
    cy.mount(
      `
			<button [size]="${size}" ${type}>Click me !</button>
		`,
      { imports: [NoopAnimationsModule, SwButtonComponent] },
    );
  }

  function mountIconButtonComponent(type: string) {
    cy.mount(
      `
			<button ${type}>
				<sw-icon name="person"></sw-icon>
			</button>
		`,
      {
        imports: [NoopAnimationsModule, SwButtonComponent, SwIconComponent],
      },
    );
  }

  it("add default padding", () => {
    mountIconButtonComponent("sw-primary-button");
  });

  it("add default border radius", () => {});

  it("use 16px font size by default", () => {});

  it('use 12px font size for "sm" input', () => {});

  it('use 16px font size for "md" input', () => {});

  it('use 20px font size for "lg" input', () => {});

  it("render primary button in primary-500 background and label in primary-50 color", () => {});

  it("render primary button in primary-900 background when hovered or focussed ", () => {});

  it("render primary button in secondary-400 background when disabled and hovered", () => {});

  it("render primary button in primary-100 background when loader is shown and hovered", () => {});

  it("render bordered type button with empty background, label with primary-600 color and 1px solid primary-600 border", () => {});

  it("render bordered button in primary-900 background and color in primary-50 when hovered or focussed", () => {});

  it("render bordered button in empty background when loader is shown and hovered", () => {});

  it("render danger button in error-info background and label in secondary-50 color", () => {});

  it("render danger button in secondary-400 background when disabled and hovered", () => {});

  it("render danger button in error-info background when loader is shown", () => {});

  it("render text button in empty background and label in primary-500 color", () => {});

  it("render text button in secondary-200 background and label in primary-900 when hovered or focussed", () => {});

  it("render text button in secondary-400 when disabled", () => {});

  it("render bordered icon button with empty background, icon with primary-900 color and 1px solid primary-900 border", () => {});

  it("render bordered icon with secondary-200 background when hovered and focussed", () => {});

  it("render bordered icon with secondary-500 color, secondary-600 border color and secondary-200 in background in disabled state", () => {});

  it("render icon button with primary-500 color", () => {});

  it("render icon button with primary-900 color and secondary-200 background color when hovered or focussed", () => {});

  it("render icon button with secondary-500 when disabled", () => {});

  it("render in disabled state when disabled input prop is true", () => {});

  it("render button in disabled state when loader is shown", () => {});

  it("render loader UI when loader input prop in true", () => {});
});
