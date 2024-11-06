import { NgFor, NgIf } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { SwIconComponent } from "../icon/icon.component";
import { CanBeNull } from "../../public-api";
import { SwListViewItem } from "./types";

@Component({
  selector: "sw-list-view",
  templateUrl: "./list-view.component.html",
  styleUrls: ["./list-view.component.scss"],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, SwIconComponent, NgIf],
})
export class SwListViewComponent {
  @Input() selectedItemId: CanBeNull<SwListViewItem["id"]> = null;

  @Input() showAsHorizontalList: boolean = true;

  @Input() title: string = "";

  @Input() items: SwListViewItem[] = [];

  @Output() selectItem = new EventEmitter<SwListViewItem>();

  protected trackItems(_: number, item: SwListViewItem) {
    return item.id;
  }
}
