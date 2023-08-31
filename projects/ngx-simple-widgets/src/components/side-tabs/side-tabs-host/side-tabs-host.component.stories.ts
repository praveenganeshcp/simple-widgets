import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SwSideTabsHostComponent } from "./side-tabs-host.component";
import { SwSideTabComponent } from "../side-tab/side-tab.component";
import { SwSideTabTitleComponent } from "../side-tab-title/side-tab-title.component";
import { SwSideTabContentComponent } from "../side-tab-content/side-tab-content.component";

export default {
  title: 'Simple Widgets/Side tabs',
  component: SwSideTabsHostComponent,
  decorators: [
    moduleMetadata({
      imports: [
		SwSideTabsHostComponent,
		SwSideTabComponent,
		SwSideTabTitleComponent,
		SwSideTabContentComponent
	  ]
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
