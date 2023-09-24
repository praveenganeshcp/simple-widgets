import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'sw-tab-title',
  template: `
    <ng-template #swTabTitle>
      <ng-content></ng-content>
    </ng-template>

  `,
  standalone: true
})
export class SwTabTitleComponent {
  
  @ViewChild("swTabTitle", {read: TemplateRef}) 
  public swTabTitleTemplate!: TemplateRef<unknown>;
  
  constructor() { }

}
