import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'sw-side-tab-title',
  templateUrl: './side-tab-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SwSideTabTitleComponent {
  
  @ViewChild("swSideTabTitle", {read: TemplateRef}) public swSideTabTitle!: TemplateRef<unknown>;
  
  constructor() { }

}
