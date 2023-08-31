import { Component, ContentChildren, AfterViewInit, EventEmitter, ChangeDetectionStrategy, TemplateRef, QueryList, Input } from '@angular/core';
import { SwSideTabComponent } from "../side-tab/side-tab.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sw-side-tabs-host',
  templateUrl: './side-tabs-host.component.html',
  styleUrls: ['./side-tabs-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class SwSideTabsHostComponent implements AfterViewInit {

  @ContentChildren(SwSideTabComponent) private swSideTabComponents!: QueryList<SwSideTabComponent>;
  
  public swSideTabTitleTemplates: TemplateRef<unknown>[] = [];
  
  private swSideTabContentTemplates: TemplateRef<unknown>[] = [];
  
  public tabClick = new EventEmitter<number>();
  
  @Input() activeTabIndex: number = 0;

  constructor() { }
  
  ngAfterViewInit() {
  	this.swSideTabComponents.toArray().forEach((sideTab) => {
  		this.swSideTabTitleTemplates.push(sideTab.swSideTabTitleComponent.swSideTabTitle);
  		this.swSideTabContentTemplates.push(sideTab.swSideTabContentComponent.swTabContentTemplate);
  	});
  }
  
  get activeTabContentTemplate(): TemplateRef<unknown> {
  	return this.swSideTabContentTemplates[this.activeTabIndex];
  }
  
  public trackTitleTemplatesByIndex(index: number): number {
  	return index;
  }
  
  onTabClick(tabIndex: number) {
  	this.tabClick.emit(tabIndex);
  }

}
