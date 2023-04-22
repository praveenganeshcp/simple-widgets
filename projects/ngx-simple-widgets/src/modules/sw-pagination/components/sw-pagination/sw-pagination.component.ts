import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'sw-pagination',
    templateUrl: './sw-pagination.component.html',
    styleUrls: ['./sw-pagination.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwPaginationComponent {
    @Input() currentPage: number = 0;

    @Input() pageOptions: number[] = [5, 10, 25];

    @Input() totalRows: number = 0;

    @Input() rowsPerPage: number = 5;
}