import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwIconComponent } from "./icon.component";

export default {
    title: 'Simple Widgets/Icon',
    component: SwIconComponent,
    decorators: [
        moduleMetadata({
            imports: []
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

export const Icon: Story = (args) => ({
    props: {
        name: 'home',
        size: 'md'
    }
})