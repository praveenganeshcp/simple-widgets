import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SwDropDownModule } from "../../sw-dropdown.module";

export default {
    decorators: [
        moduleMetadata({
            imports: [
                SwDropDownModule
            ]
        })
    ],
    title: 'Example/Dropdown'
} as Meta;

export const Simple: Story = () => ({
    template: `
        <sw-dropdown-input placeholder='select' [items]='items'></sw-dropdown-input>
    `,
    props: {
        items: [
            { key: 'Option 1', value: 'value 1' },
            { key: 'Option 2', value: 'value 2' },
            { key: 'Option 3', value: 'value 3' },
            { key: 'Option 4', value: 'value 4' },
        ]
    }
})