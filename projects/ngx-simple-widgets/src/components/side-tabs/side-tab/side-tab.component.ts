import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core';
import { SwSideTabTitleComponent } from "../side-tab-title/side-tab-title.component"
import { SwSideTabContentComponent } from "../side-tab-content/side-tab-content.component";

@Component({
  selector: 'sw-side-tab',
  templateUrl: './side-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SwSideTabComponent {

  @ContentChild(SwSideTabTitleComponent) public swSideTabTitleComponent!: SwSideTabTitleComponent;
  
  @ContentChild(SwSideTabContentComponent) public swSideTabContentComponent!: SwSideTabContentComponent;

  constructor() { }

}
