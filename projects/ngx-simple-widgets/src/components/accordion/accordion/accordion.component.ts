import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwIconComponent } from '../../icon/icon.component';

/**
 * Renders the accordion title and body. 
 */
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

    @ViewChild(CdkAccordionItem) 
    private cdkAccordionItem: CdkAccordionItem | undefined;

    constructor() { }

    public toggleAccordionBody(): void {
        if(this.cdkAccordionItem) {
            this.cdkAccordionItem.toggle();
        }
    }

    public get isExpanded(): boolean {
        return this.cdkAccordionItem ? this.cdkAccordionItem.expanded : false;
    }

}
