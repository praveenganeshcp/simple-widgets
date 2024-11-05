import { Component, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "sw-tab-content",
  template: `
    <ng-template #swTabContentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
  standalone: true,
})
export class SwTabContentComponent {
  @ViewChild("swTabContentTemplate", { read: TemplateRef })
  public swTabContentTemplate!: TemplateRef<unknown>;

  constructor() {}
}
