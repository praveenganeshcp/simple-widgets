import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { SwIconComponent } from "../../icon/icon.component";
import { SwButtonComponent } from "../../button/button.component";

@Component({
    selector: 'sw-month-calendar-header',
    templateUrl: './month-calendar-header.component.html',
    styleUrls: ['./month-calendar-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SwIconComponent, SwButtonComponent]
})
export class SwMonthCalendarHeaderComponent {

    @Input() year!: number;

    @Output() movePreviousMonth = new EventEmitter();

    @Output() movePreviousYear = new EventEmitter();

    @Output() moveNextMonth = new EventEmitter();

    @Output() moveNextYear = new EventEmitter();

    onMovePreviousMonth() {
        this.movePreviousMonth.emit();
    }

    onMoveNextMonth() {
        this.moveNextMonth.emit();
    }

     onMovePreviousYear() {
        this.movePreviousYear.emit();
    }

    onMoveNextYear() {
        this.moveNextYear.emit();
    }

}