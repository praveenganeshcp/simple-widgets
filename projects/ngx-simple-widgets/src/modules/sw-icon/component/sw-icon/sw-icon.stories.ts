import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { MatIconModule } from "@angular/material/icon";
import { SwIconComponent } from "./sw-icon.component";

export default {
    title: 'icon',
    component: SwIconComponent,
    decorators: [
        moduleMetadata({
            imports: [MatIconModule]
        })
    ]
} as Meta;

const IconTemplate: Story = (args) => ({
    props: {
        ...args
    }
})

export const HomeIcon = IconTemplate.bind({});

HomeIcon.args = {
    name: 'home'
}