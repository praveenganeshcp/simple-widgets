import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwAccordionComponent } from "./accordion.component";
import { SwAccordionTitleComponent } from "../accordion-title/accordion-title.component";
import { SwAccordionBodyComponent } from "../accordion-body/accordion-body.component";
import { action } from "@storybook/addon-actions";

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
    ],
    argTypes: {
        expanded: {
            control: 'boolean',
            name: 'Is Expanded',
            description: 'Whether to expand the accordion',
            table: {
                defaultValue: { summary: 'false' }
            }
        },
        onToggled: {
            control: 'function',
            name: 'On Toggled',
            description: 'Event triggered when accordion panel view is toggled',
        },
        disabled: {
            control: 'boolean',
            name: "Disabled",
            description: 'Whether to disable accordion',
            table: {
                defaultValue: { summary: 'false' }
            }
        }
    }
} as Meta;

const AccordionTemplate: Story = (args) => ({
    template: `
        <sw-accordion [expanded]="expanded" [disabled]="disabled" (toggled)="onToggled($event)">
            <sw-accordion-title>What is Simple Widgets ?</sw-accordion-title>
            <sw-accordion-body>
                <p>Simple Widgets is a minimal UI component library built for Angular.<p>
            </sw-accordion-body>
        </sw-accordion>
    `,
    props: {
        ...args
    }
})

export const Accordion = AccordionTemplate.bind({});
Accordion.args = {
    expanded: false,
    onToggled: action('toggled'),
    disabled: false
}