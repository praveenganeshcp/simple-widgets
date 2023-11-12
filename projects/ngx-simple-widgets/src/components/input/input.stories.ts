import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { SwInputComponent } from './input.component';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';


export default {
  title: 'Simple Widgets/Input',
  decorators: [
    moduleMetadata({
      imports: [SwInputComponent, ReactiveFormsModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      name: 'Size',
      description: 'Controls input font-size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    theme: {
      control: 'select',
      options: ['normal', 'underlined'],
      name: 'Theme',
      description: 'Controls input theme',
      table: {
        defaultValue: { summary: 'normal' },
      },
    },
  },
} as Meta;

const InputTemplate: Story = (args) => ({
  props: {
    ...args,
  },
  template: `
        <input 
            type="text" 
            placeholder="Username" 
            sw-input 
            [size]="size" 
            [theme]="theme"
            [formControl]="control"
        />
    `,
});

export const Input = InputTemplate.bind({});
Input.args = {
  size: 'md',
  theme: 'normal',
  control: new FormControl(null, Validators.required)
};
