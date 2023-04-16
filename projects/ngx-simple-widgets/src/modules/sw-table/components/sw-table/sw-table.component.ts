import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';
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

  @ContentChild(TemplateRef) swTableCellTemplate!: TemplateRef<any>;

  constructor() { }

}
