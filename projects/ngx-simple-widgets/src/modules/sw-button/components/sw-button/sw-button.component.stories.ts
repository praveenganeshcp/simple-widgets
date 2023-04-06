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
        },
        showLoaderUntil: {
            table: {
                disable: true
            }
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

const DangerButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-danger-button>Click me !</button>
    `,
    props: {
        ...args
    }
})

export const Danger = DangerButtonTemplate.bind({});
Danger.args = {
    ...Primary.args
}

const BorderedIconButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-bordered-icon-button>
            <sw-icon name='person'></sw-icon>
        </button>
    `,
    props: {
        ...args
    }
})

export const BorderedIcon = BorderedIconButtonTemplate.bind({});
BorderedIcon.args = {
    ...Primary.args
}

const TextButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-text-button>Click me !</button>
    `,
    props: {
        ...args
    }
})

export const Text = TextButtonTemplate.bind({});
Text.args = {
    ...Primary.args
}

const IconButtonTemplate: Story = (args) => ({
    template: `
        <button [size]='size' sw-icon-button>
            <sw-icon name='person'></sw-icon>
        </button>
    `,
    props: {
        ...args
    }
})

export const Icon = IconButtonTemplate.bind({});

Icon.args = {
    ...Primary.args
}