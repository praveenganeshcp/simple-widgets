import { CdkAccordionItem } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'sw-accordion',
  templateUrl: './sw-accordion.component.html',
  styleUrls: ['./sw-accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwAccordionComponent {

    @ViewChild(CdkAccordionItem) cdkAccordionItem: CdkAccordionItem | undefined;

    constructor() { }

    toggle() {
        if(this.cdkAccordionItem) {
            this.cdkAccordionItem.toggle();
        }
    }

    get isExpanded(): boolean {
        return this.cdkAccordionItem ? this.cdkAccordionItem.expanded : false;
    }

}
