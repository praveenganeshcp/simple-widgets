import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SW_TOOLTIP_POSITION } from "../../sw-tooltip.constants";
import { DEFAULT_TOOLTIP_POSITION, SwTooltipComponent } from "./sw-tooltip.component";
import { OverlayModule } from "@angular/cdk/overlay";

export default {
    title: 'Simple Widgets/Tooltip',
    component: SwTooltipComponent,
    decorators: [
        moduleMetadata({
            imports: [
                OverlayModule
            ]
        })
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
            defaultValue: DEFAULT_TOOLTIP_POSITION,
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
        <div style="margin-top: 3rem; margin-left: 20rem">
            <sw-tooltip [text]='text' [position]='position'>
                <span>Hover on me !</span>
            </sw-tooltip>
        </div>
    `
})

export const Tooltip = TooltipTemplate.bind({});

Tooltip.args = {
    text: 'This button is disabled. User is not authorized to perform the action',
    position: DEFAULT_TOOLTIP_POSITION
}