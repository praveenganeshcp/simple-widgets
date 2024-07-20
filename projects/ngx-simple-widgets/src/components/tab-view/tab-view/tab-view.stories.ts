import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SwTabViewComponent } from './tab-view.component';

export default {
  title: 'Simple Widgets/Tab view',
  decorators: [
    moduleMetadata({
      imports: [
        SwTabViewComponent,
      ],
    }),
  ],
  argTypes: {
    height: {
      name: '--sw-tab-view-height',
      description: 'CSS variable to control height of tab view',
      control: 'text',
      table: {
        defaultValue: { summary: '40vh' },
      },
    },
    width: {
      name: '--sw-tab-view-width',
      description: 'CSS variable to control width of tab view',
      control: 'text',
      table: {
        defaultValue: { summary: '70vh' },
      },
    },
    titleHeight: {
      name: '--sw-tab-view-title-height',
      description: 'CSS variable to control height of tab title container',
      control: 'text',
      table: {
        defaultValue: { summary: '20%' },
      },
    },
    contentHeight: {
      name: '--sw-tab-view-content-height',
      description: 'CSS variable to control height of tab content container',
      control: 'text',
      table: {
        defaultValue: { summary: '80%' },
      },
    },
    activeTabIndex: {
      name: 'activeTabIndex',
      description: 'Active tab index value. Starts at 0',
      control: 'number',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    showTabsInBottom: {
      name: 'showTabsInBottom',
      description: 'Whether to show the tab titles at bottom',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    tabNames: {
      name: 'tabNames',
      description: 'List of tab names',
      control: 'array',
      table: {
        defaultValue: { summary: "[]" },
      },
    },
  },
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
      [tabNames]="tabNames"
		>
      <h1>Hello</h1>
   </sw-tab-view>
	`,
  props: {
    ...args,
  },
});

export const TabView = TabViewTemplate.bind({});
TabView.args = {
  showTabsInBottom: false,
  activeTabIndex: 0,
  width: '50vw',
  height: '50vh',
  titleHeight: '15%',
  contentHeight: '85%',
  tabNames: ['Tab1', 'Tab2', 'Tab3']
};
