import { Component, ChangeDetectionStrategy, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sw-side-tab-content',
  templateUrl: './side-tab-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class SwSideTabContentComponent {

  @ViewChild("swTabContentTemplate", {read: TemplateRef}) public swTabContentTemplate!: TemplateRef<unknown>;

  constructor() { }

}
