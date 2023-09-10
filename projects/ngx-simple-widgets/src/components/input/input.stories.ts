import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwInputComponent } from "./input.component";

export default {
    title: 'Simple Widgets/Input',
    decorators: [
        moduleMetadata({
            imports: [
                SwInputComponent
            ]
        })
    ],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            name: 'Size',
            description: 'Controls input font-size',
            table: {
                defaultValue: { summary: 'md' }
            }
        },
        theme: {
            control: 'select',
            options: ['normal', 'underlined'],
            name: 'Theme',
            description: 'Controls input theme',
            table: {
                defaultValue: { summary: 'normal' }
            }
        }
    }
} as Meta;

const InputTemplate: Story = (args) => ({
    props: {
        ...args
    },
    template: `
        <input 
            type="text" 
            placeholder="Username" 
            sw-input 
            [size]="size" 
            [theme]="theme"
        />
    `
})

export const Input = InputTemplate.bind({});
Input.args = {
    size: 'md',
    theme: 'normal'
}