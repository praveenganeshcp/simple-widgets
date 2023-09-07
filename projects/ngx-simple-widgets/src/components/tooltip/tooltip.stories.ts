import { Meta, Story, moduleMetadata, componentWrapperDecorator } from "@storybook/angular";
import { SW_TOOLTIP_POSITION } from "./tooltip.constants";
import { SwTooltipComponent } from "./tooltip.component";

export default {
    title: 'Simple Widgets/Tooltip',
    decorators: [
        moduleMetadata({
            imports: [SwTooltipComponent]
        }),
        componentWrapperDecorator((story) => `
            <div style="height: 200px; width: 500px; display: flex; align-items: center; justify-content: space-evenly">
                ${story}
            </div>`)
    ],
    argTypes: {
        text: {
            control: 'text',
            name: 'Tooltip text',
            description: 'Text to be shown on tooltip',
            defaultValue: ''
        },
        position: {
            name: 'Tooltip position',
            description: 'Tooltip position relative to the element',
            defaultValue: SW_TOOLTIP_POSITION.TOP,
            control: 'select',
            options: [
                SW_TOOLTIP_POSITION.BOTTOM,
                SW_TOOLTIP_POSITION.TOP,
                SW_TOOLTIP_POSITION.LEFT,
                SW_TOOLTIP_POSITION.RIGHT
            ]
        }
    }
} as Meta;

const TooltipTemplate: Story = (args) => ({
    props: {
        ...args
    },
    template: ` 
        <sw-tooltip [text]='text' [position]='position'>
            <span>Hover on me !</span>
        </sw-tooltip>
    `
})

export const Tooltip = TooltipTemplate.bind({});

Tooltip.args = {
    text: 'This button is disabled. User is not authorized to perform the action',
    position: SW_TOOLTIP_POSITION.TOP
}