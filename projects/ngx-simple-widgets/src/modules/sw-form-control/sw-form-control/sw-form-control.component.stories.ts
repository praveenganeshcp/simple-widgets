import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwFormControlComponent } from "./sw-form-control.component";
import { SwInputModule } from "../../sw-input/sw-input.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

export default {
    title: 'Simple Widgets/Form Control',
    component: SwFormControlComponent,
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SwInputModule,
                FormsModule
            ]
        })
    ]
} as Meta;

export const FormControl: Story = () => ({
    props: {
        label: 'Username1',
        forId: 'user_name1',
        value: 'ss1'
    },
    template: `
        <sw-form-control [label]="label" [forId]="forId">
            <input id="user_name1" [(ngModel)]="value" size="sm" type="text" sw-input />
        </sw-form-control>
    `
})