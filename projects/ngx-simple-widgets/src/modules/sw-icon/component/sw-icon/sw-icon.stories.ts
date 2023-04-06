import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { MatIconModule } from "@angular/material/icon";
import { SwIconComponent } from "./sw-icon.component";
import { DEFAULT_SW_ICON_SIZE } from "../../sw-icon.constants";

export default {
    title: 'Simple Widgets/Icon',
    component: SwIconComponent,
    decorators: [
        moduleMetadata({
            imports: [MatIconModule]
        })
    ],
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large'],
            name: 'Size',
            description: 'Size of the icon',
            table: {
                defaultValue: { summary: DEFAULT_SW_ICON_SIZE }
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
    props: {
        ...args
    }
})

export const HomeIcon = IconTemplate.bind({});

HomeIcon.args = {
    name: 'home',
    size: DEFAULT_SW_ICON_SIZE
}