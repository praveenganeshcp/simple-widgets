import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwFormControlComponent } from "./sw-form-control.component";
import { SwInputModule } from "../../../sw-input/sw-input.module";

export default {
    title: 'Simple Widgets/Form Control',
    component: SwFormControlComponent,
    decorators: [
        moduleMetadata({
            imports: [
                SwInputModule,
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