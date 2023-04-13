import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwInputComponent } from "./sw-input.component";
import { SwInputModule } from "../../sw-input.module";

export default {
    title: 'Simple Widgets/Input',
    component: SwInputComponent,
    decorators: [
        moduleMetadata({
            imports: [
                SwInputModule
            ]
        })
    ],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg']
        }
    }
} as Meta;

export const Input: Story = (args) => ({
    props: {
        ...args
    },
    template: `
        <input type="number" sw-input size="sm" />
    `
})