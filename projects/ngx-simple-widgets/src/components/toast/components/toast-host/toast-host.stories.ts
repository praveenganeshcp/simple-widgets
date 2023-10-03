import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwToastService } from "../../services/toast.service";
import { SwToastModule } from "../../toast.module";
import { OnInit, Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "sw-toast-demo",
    template: `<button (click)="openDialog()">Open toast</button>`,
    imports: [SwToastModule]
})
class ToastDemoHostComponent {

    constructor(
        private swToastService: SwToastService
    ) {}

    openDialog() {
        this.swToastService.error({
                title: "Toast demo",
                message: "Toast message shown for demo",
            });
    }
}

export default {
    title: 'Simple Widgets/Toast',
    component: ToastDemoHostComponent,
    decorators: [
        moduleMetadata({
            imports: [ToastDemoHostComponent]
        })
    ],
    tags: ['docs'],
} as Meta;

export const Toast: Story = (args) => ({
	props: {...args},
})