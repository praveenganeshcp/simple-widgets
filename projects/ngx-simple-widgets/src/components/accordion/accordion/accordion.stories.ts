import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwAccordionComponent } from "./accordion.component";
import { SwAccordionTitleComponent } from "../accordion-title/accordion-title.component";
import { SwAccordionBodyComponent } from "../accordion-body/accordion-body.component";

export default {
    title: 'Simple Widgets/Accordion',
    decorators: [
        moduleMetadata({
            imports: [
                SwAccordionComponent,
                SwAccordionTitleComponent,
                SwAccordionBodyComponent
            ]
        })
    ]
} as Meta;

export const Accordion: Story = (args) => ({
    template: `
        <sw-accordion>
            <sw-accordion-title>What is Simple Widgets ?</sw-accordion-title>
            <sw-accordion-body>
                <p>Simple Widgets is a minimal UI component library built for Angular.<p>
            </sw-accordion-body>
        </sw-accordion>
    `
})