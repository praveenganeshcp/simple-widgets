import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'sw-calendar',
    styleUrls: ['./sw-calendar.component.scss'],
    templateUrl: './sw-calendar.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwCalendarComponent),
            multi: true        
        }
    ]
})
export class SwCalendarComponent implements ControlValueAccessor {
   
    selectedDate: Date | null = null;

    calendarState: Date = new Date();

    private onChangeFn: Function | null = null;

    private onTouchFn: Function | null = null;

    onMovePreviousMonth() {
        this.calendarState.setMonth(this.calendarState.getMonth()-1);
        this.calendarState = new Date(this.calendarState);
    }

    onDateChange(date: Date) {
        this.selectedDate = new Date(date);
        if(this.onChangeFn) {
            this.onChangeFn(date);
        }
    }

    onMoveNextMonth() {
        this.calendarState.setMonth(this.calendarState.getMonth()+1);
        this.calendarState = new Date(this.calendarState);
    }

    writeValue(initialDate: Date | null): void {
        this.selectedDate = initialDate !== null ? new Date(initialDate) : null;
        this.calendarState = initialDate !== null ? new Date(initialDate) : new Date();
    }

    registerOnChange(fn: Function): void {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onTouchFn = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
}