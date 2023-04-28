import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwSwitchModule } from "../../sw-switch.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
    title: 'Simple Widgets/Switch',
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule, SwSwitchModule]
        })
    ]
} as Meta;

export const Switch: Story = (args) => ({
    template: `
        <sw-switch></sw-switch>
    `
})
