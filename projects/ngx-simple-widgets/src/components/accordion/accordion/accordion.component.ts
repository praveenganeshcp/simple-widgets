import { CdkAccordionItem, CdkAccordionModule } from '@angular/cdk/accordion';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
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
})
export class SwAccordionComponent {
  @ViewChild(CdkAccordionItem)
  private cdkAccordionItem: CdkAccordionItem | undefined;

  @Input()
  set expanded(expand: boolean) {
    if (expand === true) {
      if (!this.isExpanded) {
        this.toggleAccordionBody();
      }
    } else {
      if (this.isExpanded) {
        this.toggleAccordionBody();
      }
    }
  }

  @Input() disabled: boolean = false;

  @Output() toggled = new EventEmitter<boolean>();

  constructor() {}

  public toggleAccordionBody(): void {
    if (this.cdkAccordionItem && !this.disabled) {
      this.cdkAccordionItem.toggle();
      this.toggled.emit(this.isExpanded);
    }
  }

  public get isExpanded(): boolean {
    return this.cdkAccordionItem ? this.cdkAccordionItem.expanded : false;
  }
}
