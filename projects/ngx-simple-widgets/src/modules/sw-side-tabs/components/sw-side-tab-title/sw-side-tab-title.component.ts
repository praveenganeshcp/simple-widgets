import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'sw-side-tab-title',
  templateUrl: './sw-side-tab-title.component.html',
  styleUrls: ['./sw-side-tab-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwSideTabTitleComponent {
  
  @ViewChild("swSideTabTitle", {read: TemplateRef}) public swSideTabTitle!: TemplateRef<unknown>;
  
  constructor() { }

}
