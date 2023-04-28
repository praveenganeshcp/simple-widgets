import { Component, OnInit, ContentChildren, AfterViewInit, EventEmitter, ChangeDetectionStrategy, TemplateRef, ViewChildren, QueryList, Input } from '@angular/core';
import { SwSideTabComponent } from "../sw-side-tab/sw-side-tab.component";

@Component({
  selector: 'sw-side-tabs-host',
  templateUrl: './sw-side-tabs-host.component.html',
  styleUrls: ['./sw-side-tabs-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
