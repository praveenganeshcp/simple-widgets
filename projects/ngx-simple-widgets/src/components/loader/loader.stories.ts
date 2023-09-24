import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwLoaderComponent } from "./loader.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export default {
    title: 'Simple Widgets/Loader',
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                SwLoaderComponent
            ]
        })
    ],
    argTypes: {
        height: {
            name: '--sw-loader-height',
            description: 'CSS variable to control height of the loader',
            control: 'text',
             table: {
                defaultValue: { summary: '18px' }
            },
        },
        width: {
            name: '--sw-loader-width',
            description: 'CSS variable to control width of the loader',
            control: 'text',
            table: {
                defaultValue: { summary: '18px' }
            },
        }
    }
} as Meta;

const LoaderTemplate: Story = (args) => ({
    template: `
        <sw-loader 
            [style.--sw-loader-height]="height" 
            [style.--sw-loader-width]="width"
        >
        </sw-loader>
    `,
    props: {
        ...args
    }
}) 

export const Loader = LoaderTemplate.bind({});

Loader.args = {
    height: '40px',
    width: '40px'
}