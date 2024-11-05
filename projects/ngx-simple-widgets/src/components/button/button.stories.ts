import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SwButtonComponent } from "./button.component";
import { action } from "@storybook/addon-actions";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
  decorators: [
    moduleMetadata({
      imports: [SwButtonComponent, BrowserAnimationsModule],
    }),
  ],
  title: "Simple Widgets/Button",
  argTypes: {
    disabled: {
      control: "boolean",
      name: "Disable button",
      description: "Whether to disable the button",
    },
    showLoader: {
      control: "boolean",
      name: "Show Loader",
      description: "Whether to show loader",
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      name: "Size",
      description: "Size of the button",
    },
    iconName: {
      control: "text",
      name: "Icon Name",
      description: "Name of the icon to be rendered as label",
    },
  },
} as Meta;

const PrimaryButtonTemplate: Story = (args) => ({
  template: `
        <button 
            [size]='size' 
            [showLoader]='showLoader' 
            [disabled]='disabled' 
            sw-primary-button
        >
            Create Account
        </button>
    `,
  props: {
    ...args,
  },
});

export const Primary = PrimaryButtonTemplate.bind({});
Primary.args = {
  size: "md",
  showLoader: false,
  disabled: false,
};

const BorderedButtonTemplate: Story = (args) => ({
  template: `
        <button 
            [size]='size' 
            [showLoader]='showLoader' 
            [disabled]='disabled' 
            sw-bordered-button
        >
            Create Account
        </button>
    `,
  props: {
    ...args,
  },
});

export const Bordered = BorderedButtonTemplate.bind({});
Bordered.args = {
  ...Primary.args,
};

const DangerButtonTemplate: Story = (args) => ({
  template: `
        <button 
            [size]='size' 
            [showLoader]='showLoader' 
            [disabled]='disabled' 
            sw-danger-button
        >
            Create Account
        </button>
    `,
  props: {
    ...args,
  },
});

export const Danger = DangerButtonTemplate.bind({});
Danger.args = {
  ...Primary.args,
};

const BorderedIconButtonTemplate: Story = (args) => ({
  template: `
        <button 
            [size]='size' 
            [showLoader]='showLoader' 
            [disabled]='disabled' 
            sw-bordered-icon-button
            [iconName]="iconName"
        >
        </button>
    `,
  props: {
    ...args,
  },
});

export const BorderedIcon = BorderedIconButtonTemplate.bind({});
BorderedIcon.args = {
  ...Primary.args,
  iconName: "person",
};

const TextButtonTemplate: Story = (args) => ({
  template: `
        <button 
            [size]='size' 
            [showLoader]='showLoader' 
            [disabled]='disabled' 
            sw-text-button
        >
            Create Account
        </button>
    `,
  props: {
    ...args,
  },
});

export const Text = TextButtonTemplate.bind({});
Text.args = {
  ...Primary.args,
};

const IconButtonTemplate: Story = (args) => ({
  template: `
        <button 
            [size]='size' 
            [showLoader]='showLoader'
            [disabled]='disabled' 
            sw-icon-button
            [iconName]="iconName"
        >
        </button>
    `,
  props: {
    ...args,
  },
});

export const Icon = IconButtonTemplate.bind({});

Icon.args = {
  ...Primary.args,
  iconName: "person",
};
