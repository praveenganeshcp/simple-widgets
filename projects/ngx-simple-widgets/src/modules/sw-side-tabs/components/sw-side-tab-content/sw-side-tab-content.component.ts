import { Component, ChangeDetectionStrategy, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sw-side-tab-content',
  templateUrl: './sw-side-tab-content.component.html',
  styleUrls: ['./sw-side-tab-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwSideTabContentComponent {

  @ViewChild("swTabContentTemplate", {read: TemplateRef}) public swTabContentTemplate!: TemplateRef<unknown>;

  constructor() { }

}
