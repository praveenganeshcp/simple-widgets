import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwCalendarComponent } from "./calendar.component";
import { ReactiveFormsModule, FormControl } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

export default {
  title: "Simple Widgets/Calendar",
  decorators: [
    moduleMetadata({
      imports: [SwCalendarComponent, ReactiveFormsModule, NoopAnimationsModule],
    }),
  ],
  argTypes: {
    dateFormControl: {
      name: "formControl",
      control: "date",
      description: "Supports form control or ngModel to save state",
    },
  },
} as Meta;

const CalendarTemplate: Story = (args: any) => ({
  template: `
        <sw-calendar [formControl]="dateFormControl"></sw-calendar>
    `,
  props: {
    dateFormControl: new FormControl(new Date(args.dateFormControl)),
  },
});

export const Calendar = CalendarTemplate.bind({});
Calendar.args = {
  dateFormControl: Date.now(),
};
