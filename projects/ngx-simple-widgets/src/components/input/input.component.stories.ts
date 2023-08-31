import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwInputComponent } from "./input.component";

export default {
    title: 'Simple Widgets/Input',
    component: SwInputComponent,
    decorators: [
        moduleMetadata({
            imports: [
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