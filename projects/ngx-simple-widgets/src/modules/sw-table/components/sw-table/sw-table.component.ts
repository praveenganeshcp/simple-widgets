import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { SwColumnDef, SwPagination } from '../../types';

@Component({
  selector: 'sw-table',
  templateUrl: './sw-table.component.html',
  styleUrls: ['./sw-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwTableComponent {

  @Input() rows: any[] = [];

  @Input() isLoading: boolean = false;

  @Input() activeColumns: SwColumnDef[] = [];

  @Input() pagination: SwPagination | null = null;

  @Input() customCellTemplate: TemplateRef<unknown> | null = null;

  constructor() { }

  trackByIndex(index: number) {
    return index;
  }

}
