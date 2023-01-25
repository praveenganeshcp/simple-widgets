import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { DEFAULT_SW_BUTTON_SIZE } from "../../sw-button.constants";
import { SwButtonModule } from "../../sw-button.module";
import { SwIconModule } from "../../../sw-icon/sw-icon.module";
import { SwButtonComponent } from "./sw-button.component";

export default {
    component: SwButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [SwButtonModule, SwIconModule]
        })
    ],
    title: 'Simple Widgets/Button',
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large'],
            name: 'Size',
            description: 'Size of the button'
        }
    }
} as Meta;


const PrimaryButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-primary-button>Click me !</button>
    `,
    props: {
        ...args
    }
})

export const Primary = PrimaryButtonTemplate.bind({});
Primary.args = {
    size: DEFAULT_SW_BUTTON_SIZE
};

const BorderedButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-bordered-button>Click me !</button>
    `,
    props: {
        ...args
    }
})

export const Bordered = BorderedButtonTemplate.bind({});
Bordered.args = {
    ...Primary.args
}

const WarningButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-danger-button>Click me !</button>
    `,
    props: {
        ...args
    }
})

export const Warning = WarningButtonTemplate.bind({});
Bordered.args = {
    ...Primary.args
}

const IconButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-icon-button>
            <sw-icon name='person' [size]='size'></sw-icon>
        </button>
    `,
    props: {
        ...args
    }
})

export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
    ...Primary.args
}