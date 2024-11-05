import { Meta, moduleMetadata, Story } from "@storybook/angular";
import {
  ReactiveFormsModule,
  FormControl as AngularFormControl,
  Validators,
} from "@angular/forms";
import { SwFormControlComponent } from "./form-control.component";
import { SwInputComponent } from "../input/input.component";

export default {
  title: "Simple Widgets/Form control",
  decorators: [
    moduleMetadata({
      imports: [SwFormControlComponent, SwInputComponent, ReactiveFormsModule],
    }),
  ],
} as Meta;

const FormControlTemplate: Story = (args) => ({
  template: `
        <sw-form-control [label]="label" [control]="control" [errorMessagesMap]="errorMessagesMap">
          <input type="text" sw-input [formControl]="control"  />
        </sw-form-control>
    `,
  props: {
    ...args,
  },
});

export const FormControl = FormControlTemplate.bind({});
FormControl.args = {
  control: new AngularFormControl("", [Validators.required]),
  label: "Username",
  errorMessagesMap: {},
};
