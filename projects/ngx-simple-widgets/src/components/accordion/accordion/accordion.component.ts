import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwIconComponent } from '../../icon/icon.component';

@Component({
  selector: 'sw-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    CdkAccordionModule,
    SwIconComponent
  ]
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
