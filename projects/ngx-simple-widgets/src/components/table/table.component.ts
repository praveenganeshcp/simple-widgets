import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from "@angular/core";
import { SwColumnDef, SwPagination } from "./types";
import { CommonModule } from "@angular/common";

@Component({
  selector: "sw-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class SwTableComponent {
  @Input() rows: any[] = [];

  @Input() isLoading: boolean = false;

  @Input() activeColumns: SwColumnDef[] = [];

  @Input() pagination: SwPagination | null = null;

  @Input() customCellTemplate: TemplateRef<unknown> | null = null;

  constructor() {}

  trackByIndex(index: number) {
    return index;
  }
}
