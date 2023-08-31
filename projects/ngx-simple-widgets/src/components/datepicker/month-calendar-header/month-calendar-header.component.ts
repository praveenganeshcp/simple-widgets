import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { SwIconComponent } from "../../icon/icon.component";

@Component({
    selector: 'sw-month-calendar-header',
    templateUrl: './month-calendar-header.component.html',
    styleUrls: ['./month-calendar-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SwIconComponent]
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