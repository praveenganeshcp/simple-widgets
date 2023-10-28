import {
  Component,
  ContentChildren,
  Output,
  AfterViewInit,
  EventEmitter,
  TemplateRef,
  QueryList,
  Input,
} from '@angular/core';
import { SwTabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sw-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SwTabViewComponent implements AfterViewInit {
  @ContentChildren(SwTabComponent)
  private swTabComponents!: QueryList<SwTabComponent>;

  public swTabTitleTemplates: TemplateRef<unknown>[] = [];

  private swTabContentTemplates: TemplateRef<unknown>[] = [];

  @Output() public tabClick = new EventEmitter<number>();

  @Input() activeTabIndex: number = 0;

  @Input() showTabsInBottom: boolean = false;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.swTabComponents.toArray().forEach((tab) => {
        this.swTabTitleTemplates.push(
          tab.swTabTitleComponent.swTabTitleTemplate,
        );
        this.swTabContentTemplates.push(
          tab.swTabContentComponent.swTabContentTemplate,
        );
      });
    }, 0);
  }

  get activeTabContentTemplate(): TemplateRef<unknown> {
    return this.swTabContentTemplates[this.activeTabIndex || 0];
  }

  public trackTitleTemplatesByIndex(index: number): number {
    return index;
  }

  onTabClick(tabIndex: number) {
    this.tabClick.emit(tabIndex);
  }
}
