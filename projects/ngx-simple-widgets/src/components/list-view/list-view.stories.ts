import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwListViewComponent } from "./list-view.component";

export default {
  title: "Simple Widgets/List view",
  decorators: [
    moduleMetadata({
      imports: [SwListViewComponent],
    }),
  ],
  argTypes: {
    items: {
      name: "items",
      description: "Items to show in list",
      control: "text",
    },
    selectedItemId: {
      name: "selectedItemId",
      description: "Items to show as selected in list",
      control: "text",
    },
    showAsHorizontalList: {
      name: "showAsHorizontalList",
      description: "Whether to show items in horizontal way",
      control: "boolean",
    },
  },
} as Meta;

const ListViewTemplate: Story = (args) => ({
  template: `
        <sw-list-view
            [items]='items'
            [selectedItemId]='selectedItemId'
            [title]='title'
            [showAsHorizontalList]='showAsHorizontalList'
        >
        </sw-list-view>
    `,
  props: {
    ...args,
  },
});

export const ListView = ListViewTemplate.bind({});

ListView.args = {
  items: [
    {
      text: "Home",
      icon: "home",
      id: 1,
    },
    {
      text: "Profile",
      icon: "person",
      id: 2,
    },
  ],
  selectedItemId: 2,
  title: "Title",
  showAsHorizontalList: false
};
