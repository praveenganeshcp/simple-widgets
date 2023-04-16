import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwAccordionModule } from "../../sw-accordion.module";

export default {
    title: 'Simple Widgets/Accordion',
    decorators: [
        moduleMetadata({
            imports: [SwAccordionModule]
        })
    ]
} as Meta;

export const Accordion: Story = (args) => ({
    template: `
        <div style="margin: 2rem;">
            <sw-accordion>
                <sw-accordion-title>Introduction</sw-accordion-title>
                <sw-accordion-body>
                    <p>Simple Widgets is a minimal UI component library built for Angular.<p>
                </sw-accordion-body>
            </sw-accordion>
        </div>
    `
})