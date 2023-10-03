import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SW_TOOLTIP_POSITION } from "./tooltip.constants";
import { DEFAULT_TOOLTIP_POSITION, SwTooltipComponent } from "./tooltip.component";

export default {
    title: 'Simple Widgets/Tooltip',
    decorators: [
        moduleMetadata({
            imports: [
                SwTooltipComponent
            ]
        })
    ],
    argTypes: {
        text: {
            description: 'Text to be shown on tooltip',
            table: {
                defaultValue: {
                    summary: ''
                }
            },
        },
        position: {
            description: 'Tooltip position relative to the element',
            table: {
                defaultValue: {
                    summary: DEFAULT_TOOLTIP_POSITION
                }
            },
            control: 'select',
            options: [
                SW_TOOLTIP_POSITION.BOTTOM,
                SW_TOOLTIP_POSITION.TOP,
                SW_TOOLTIP_POSITION.LEFT,
                SW_TOOLTIP_POSITION.RIGHT
            ]
        },
        disable: {
            description: 'Tooltip text will not be shown on hover in disabled state',
            table: {
                defaultValue: {
                    summary: false
                }
            },
            control: 'boolean',
        }
    }
} as Meta;

const TooltipTemplate: Story = (args) => ({
    props: {
        ...args
    },
    template: `
        <sw-tooltip [disable]="disable" [text]='text' [position]='position'>
            <span>Hover on me !</span>
        </sw-tooltip>
    `
})

export const Tooltip = TooltipTemplate.bind({});

Tooltip.args = {
    text: 'This action is disabled',
    position: DEFAULT_TOOLTIP_POSITION,
    disable: false
}