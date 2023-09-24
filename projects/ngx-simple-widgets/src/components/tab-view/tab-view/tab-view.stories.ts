import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { SwTabViewComponent } from "./tab-view.component";
import { SwTabComponent } from "../tab/tab.component";
import { SwTabTitleComponent } from "../tab-title/tab-title.component";
import { SwTabContentComponent } from "../tab-content/tab-content.component";

export default {
  title: 'Simple Widgets/Tab view',
  decorators: [
    moduleMetadata({
      imports: [
				SwTabViewComponent,
				SwTabComponent,
				SwTabTitleComponent,
				SwTabContentComponent
		  ]
    })
  ],
  argTypes: {
  	height: {
        name: '--sw-tab-view-height',
        description: 'CSS variable to control height of tab view',
        control: 'text',
        table: {
        	defaultValue: { summary: "40vh" }
        }
    },
    width: {
        name: '--sw-tab-view-width',
        description: 'CSS variable to control width of tab view',
        control: 'text',
        table: {
        	defaultValue: { summary: "70vh" }
        }
    },
    titleHeight: {
        name: '--sw-tab-view-title-height',
        description: 'CSS variable to control height of tab title container',
        control: 'text',
        table: {
        	defaultValue: { summary: "20%" }
        }
    },
    contentHeight: {
        name: '--sw-tab-view-content-height',
        description: 'CSS variable to control height of tab content container',
        control: 'text',
        table: {
        	defaultValue: { summary: "80%" }
        }
    },
    activeTabIndex: {
        name: 'activeTabIndex',
        description: 'Active tab index value. Starts at 0',
        control: 'number',
        table: {
        	defaultValue: { summary: "0" }
        }
    },
    showTabsInBottom: {
        name: 'showTabsInBottom',
        description: 'Whether to show the tab titles at bottom',
        control: 'boolean',
        table: {
        	defaultValue: { summary: "false" }
        }
    }
  }
} as Meta;

const TabViewTemplate: Story = (args) => ({
	template: `
		<sw-tab-view 
			[style.--sw-tab-view-width]="width"
			[style.--sw-tab-view-height]="height"
			[style.--sw-tab-view-title-height]="titleHeight"
			[style.--sw-tab-view-content-height]="contentHeight"
			[activeTabIndex]="activeTabIndex" 
			[showTabsInBottom]="showTabsInBottom"
		>
        <sw-tab>
            <sw-tab-title>tab 1</sw-tab-title>
            <sw-tab-content>tab 1 content</sw-tab-content>
        </sw-tab>
        <sw-tab>
            <sw-tab-title>tab 2</sw-tab-title>
            <sw-tab-content>tab 2 content</sw-tab-content>
        </sw-tab>
        <sw-tab>
            <sw-tab-title>tab 3</sw-tab-title>
            <sw-tab-content>tab 3 content</sw-tab-content>
        </sw-tab>
   </sw-tab-view>
	`,
	props: {
		...args
	}
})

export const TabView = TabViewTemplate.bind({});
TabView.args = {
	showTabsInBottom: true,
	activeTabIndex: 0,
	width: "50vw",
	height: "50vh",
	titleHeight: "30%",
	contentHeight: "70%"
}