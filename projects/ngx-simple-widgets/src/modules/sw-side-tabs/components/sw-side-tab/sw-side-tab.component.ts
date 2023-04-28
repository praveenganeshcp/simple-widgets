import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { SwSideTabTitleComponent } from "../sw-side-tab-title/sw-side-tab-title.component"
import { SwSideTabContentComponent } from "../sw-side-tab-content/sw-side-tab-content.component";

@Component({
  selector: 'sw-side-tab',
  templateUrl: './sw-side-tab.component.html',
  styleUrls: ['./sw-side-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwSideTabComponent {

  @ContentChild(SwSideTabTitleComponent) public swSideTabTitleComponent!: SwSideTabTitleComponent;
  
  @ContentChild(SwSideTabContentComponent) public swSideTabContentComponent!: SwSideTabContentComponent;

  constructor() { }

}
