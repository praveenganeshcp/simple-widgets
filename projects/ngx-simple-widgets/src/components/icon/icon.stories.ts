import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwIconComponent } from "./icon.component";

export default {
    title: 'Simple Widgets/Icon',
    decorators: [
        moduleMetadata({
            imports: [SwIconComponent],
        })
    ],
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
            name: 'Size',
            description: 'Size of the icon',
            table: {
                defaultValue: { summary: 'md' }
            },
        },
        name: {
            control: 'text',
            name: 'Icon name',
            description: 'Name of the icon. NOTE: Only material icons names are valid'
        }
    },
} as Meta;

const IconTemplate: Story = (args) => ({
    template: `
        <sw-icon [name]="name" [size]="size"></sw-icon>
    `,
    props: {
        ...args
    }
})

export const Icon = IconTemplate.bind({});
Icon.args = {
    name: 'home',
    size: 'md'
}