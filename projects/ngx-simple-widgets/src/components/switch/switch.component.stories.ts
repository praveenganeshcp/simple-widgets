import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SwSwitchComponent } from "./switch.component";

export default {
    title: 'Simple Widgets/Switch',
    decorators: [
        moduleMetadata({
            imports: [BrowserAnimationsModule, SwSwitchComponent]
        })
    ],
    tags: ['docs']
} as Meta;

export const Switch: Story = (args) => ({
    template: `
        <sw-switch></sw-switch>
    `
})
