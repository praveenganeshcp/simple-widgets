import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * Render body of the 
 */
@Component({
    selector: 'sw-accordion-body',
    template: '<ng-content></ng-content>',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwAccordionBodyComponent {}