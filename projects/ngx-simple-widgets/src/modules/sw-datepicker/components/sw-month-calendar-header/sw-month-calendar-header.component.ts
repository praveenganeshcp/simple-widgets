import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'sw-month-calendar-header',
    templateUrl: './sw-month-calendar-header.component.html',
    styleUrls: ['./sw-month-calendar-header.component.scss']
})
export class SwMonthCalendarHeaderComponent {

    @Input() year!: number;

    @Output() movePreviousMonth = new EventEmitter();

    @Output() moveNextMonth = new EventEmitter();

    onMovePreviousMonth() {
        this.movePreviousMonth.emit();
    }

    onMoveNextMonth() {
        this.moveNextMonth.emit();
    }

}