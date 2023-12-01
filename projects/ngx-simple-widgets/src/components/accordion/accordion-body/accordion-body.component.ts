import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Renders the body of the accordion
 */
@Component({
  selector: 'sw-accordion-body',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwAccordionBodyComponent {}
