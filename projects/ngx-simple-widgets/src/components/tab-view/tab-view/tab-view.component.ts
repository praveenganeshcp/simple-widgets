import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "sw-tab-view",
  templateUrl: "./tab-view.component.html",
  styleUrls: ["./tab-view.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwTabViewComponent {
  @Input() tabNames: string[] = [];

  @Output() public tabClick = new EventEmitter<number>();

  @Input() activeTabIndex: number = 0;

  @Input() showTabsInBottom: boolean = false;

  constructor() {}

  onTabClick(tabIndex: number) {
    this.tabClick.emit(tabIndex);
  }
}
