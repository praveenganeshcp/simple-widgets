import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SwDropDownModule } from "../../sw-dropdown.module";
import { FormsModule } from "@angular/forms";

export default {
    title: 'Simple Widgets/Dropdown',
    decorators: [
        moduleMetadata({
            imports: [
                SwDropDownModule,
                FormsModule
            ]
        })
    ],
} as Meta;

export const Dropdown: Story = () => ({
    template: `
        <sw-dropdown-input [(ngModel)]="selectedValues" placeholder='Select' [items]='items'></sw-dropdown-input>
    `,
    props: {
        items: [
            { key: 'Option 1', value: 'value 1' },
            { key: 'Option 2', value: 'value 2' },
            { key: 'Option 3', value: 'value 3' },
            { key: 'Option 4', value: 'value 4' },
        ],
        selectedValues: ['value 3']
    }
})