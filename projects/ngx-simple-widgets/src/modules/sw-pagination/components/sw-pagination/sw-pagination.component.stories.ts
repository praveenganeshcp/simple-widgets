import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwPaginationModule } from "../../sw-pagination.module";

export default {
    title: 'Simple Widgets/Pagination',
    decorators: [
        moduleMetadata({
            imports: [SwPaginationModule]
        })
    ]
} as Meta;


export const Pagination: Story = (args) => ({
    template: `
        <sw-pagination></sw-pagination>
    `
})