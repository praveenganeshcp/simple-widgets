import { Meta, Story, moduleMetadata } from "@storybook/angular";
import { SwSidePanelMenuComponent } from "./side-panel-menu.component";
import { Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

@Component({
  standalone: true,
  template: "<h1>hello</h1>",
  selector: "sw-side-panel-demo1",
})
class TestComponent1 {}

@Component({
  standalone: true,
  template: "<h1>world</h1>",
  selector: "sw-side-panel-demo2",
})
class TestComponent2 {}

const routes: Routes = [
  { path: "lorem", component: TestComponent1 },
  { path: "ipsum", component: TestComponent2 },
];

export default {
  title: "Simple Widgets/Side panel",
  decorators: [
    moduleMetadata({
      imports: [
        SwSidePanelMenuComponent,
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
  argTypes: {
    menuItems: {
      name: "menuItems",
      description: "Menu items to show in side panel",
      control: "text",
    },
  },
} as Meta;

const SidePanelTemplate: Story = (args) => ({
  template: `
        <sw-side-panel-menu 
            [menuItems]='menuItems'
        >
            <h1>hello world</h1>
        </sw-side-panel-menu>
    `,
  props: {
    ...args,
  },
});

export const SidePanel = SidePanelTemplate.bind({});

SidePanel.args = {
  menuItems: [
    {
      label: "Home",
      icon: "home",
      url: "/lorem",
    },
    {
      label: "Profile",
      icon: "person",
      url: "/ipsum",
    },
  ],
};
