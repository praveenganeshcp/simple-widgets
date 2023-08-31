import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwFormControlComponent } from "./form-control.component";
import { SwInputComponent } from "../input/input.component";

export default {
    title: 'Simple Widgets/Form Control',
    decorators: [
        moduleMetadata({
            imports: [
                SwFormControlComponent,
                SwInputComponent
            ]
        })
    ]
} as Meta;

export const FormControl: Story = () => ({
    props: {
        label: 'Username1',
        forId: 'user_name1',
        error: 'User name cannot be empty'
    },
    template: `
        <sw-form-control [label]="label" [forId]="forId" [error]="error">
            <input id="user_name1" type="text" sw-input />
        </sw-form-control>
    `
})