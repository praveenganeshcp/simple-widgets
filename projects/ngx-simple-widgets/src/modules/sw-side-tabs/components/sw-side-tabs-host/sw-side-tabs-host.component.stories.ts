import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SwSideTabsHostComponent } from "./sw-side-tabs-host.component";
import { SwSideTabsModule } from "../../sw-side-tabs.module";

export default {
  title: 'Simple Widgets/Side tabs',
  component: SwSideTabsHostComponent,
  decorators: [
    moduleMetadata({
      imports: [SwSideTabsModule]
    })
  ]
} as Meta;

export const Sidetabs: Story = (args) => ({
	template: `
		<sw-side-tabs-host>
			<sw-side-tab>
				<sw-side-tab-title>Tab title 1</sw-side-tab-title>
				<sw-side-tab-content>Tab content 1</sw-side-tab-content>
			</sw-side-tab>
			<sw-side-tab>
				<sw-side-tab-title>Tab title 2</sw-side-tab-title>
				<sw-side-tab-content>Tab content 2</sw-side-tab-content>
			</sw-side-tab>
		</sw-side-tabs-host>
	`
})
