import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'sw-month-calendar',
    templateUrl: './sw-month.component.html',
    styleUrls: ['./sw-month.component.scss'],
})
export class SwMonthCalendarComponent implements OnInit, OnChanges {

    @Input() selectedDate: Date | null = null;

    @Input() month!: number;

    @Input() year!: number;

    @Output() dateChange = new EventEmitter<Date>();

    calendar: number[][] = [];

    weekDays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    currentMonthStartDate: Date | null = null;

    ngOnInit() {
        this.calculateYear();
    }

    ngOnChanges() {
        this.calculateYear();
    }

    isSelectedDate(date: number): boolean {
        if(this.selectedDate === null) {
            return false;
        }
        return (
            this.selectedDate.getDate() === date && 
            this.selectedDate.getMonth() === this.month &&
            this.selectedDate.getFullYear() === this.year
        )
    }

    calculateYear() {
        this.calendar = [];
        const currentMonthStartDate = new Date(this.year, this.month, 1);
        this.currentMonthStartDate = new Date(currentMonthStartDate);
        let calendar: number[][] = [];
        while(currentMonthStartDate.getMonth() === this.month) {
            const weekDates: number[] = new Array(7).fill(null);
            while(1) {
                weekDates[currentMonthStartDate.getDay()] = currentMonthStartDate.getDate();
                currentMonthStartDate.setDate(currentMonthStartDate.getDate()+1);
                if(currentMonthStartDate.getDay() === 0 || currentMonthStartDate.getMonth() !== this.month) {
                    calendar.push(weekDates);
                    break;
                }
            }
        }
        this.calendar = calendar;
    }

    onSelectDate(date: number) {
        this.dateChange.emit(new Date(this.year, this.month, date));
    }
   
}