import { Component, ContentChild } from '@angular/core';
import { SwTabTitleComponent } from "../tab-title/tab-title.component"
import { SwTabContentComponent } from "../tab-content/tab-content.component";

@Component({
  selector: 'sw-tab',
  template: `
    <ng-content></ng-content>
  `,
  standalone: true
})
export class SwTabComponent {

  @ContentChild(SwTabTitleComponent) 
  public swTabTitleComponent!: SwTabTitleComponent;
  
  @ContentChild(SwTabContentComponent) 
  public swTabContentComponent!: SwTabContentComponent;

  constructor() { }

}
