import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Renders the title of the accordion component.
 */
@Component({
  selector: 'sw-accordion-title',
  template: '<ng-content></ng-content>',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwAccordionTitleComponent {}
