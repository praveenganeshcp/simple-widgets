import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { SwDropdownComponent } from "./dropdown.component";

export default {
    title: 'Simple Widgets/Dropdown',
    decorators: [
        moduleMetadata({
            imports: [
                SwDropdownComponent,
                FormsModule
            ]
        })
    ],
    argTypes: {
        items: {
            control: 'object',
            description: 'Items to be rendered in dropdown',
            table: {
                defaultValue: { summary: '[]' }
            }
        },
    }
} as Meta;

const DropdownTemplate: Story = (args) => ({
    template: `
        <sw-dropdown
            [(ngModel)]="selectedValues" 
            placeholder='Select' 
            [options]='items'
        >
        </sw-dropdown>
    `,
    props: {
        ...args
    }
})

export const Dropdown = DropdownTemplate.bind({});
Dropdown.args = {
    items: [
        { key: 'Option 1', value: 'value 1' },
        { key: 'Option 2', value: 'value 2' },
        { key: 'Option 3', value: 'value 3' },
        { key: 'Option 4', value: 'value 4' },
    ],
    selectedValues: []
}