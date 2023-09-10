import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
<<<<<<< Updated upstream
 * Render body of the 
=======
 * Renders the body of the accordion
>>>>>>> Stashed changes
 */
@Component({
    selector: 'sw-accordion-body',
    template: '<ng-content></ng-content>',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwAccordionBodyComponent {}