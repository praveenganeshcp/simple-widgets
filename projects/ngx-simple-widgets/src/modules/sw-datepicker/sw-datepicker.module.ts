import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SwIconModule } from "../sw-icon/sw-icon.module";
import { SwCalendarComponent } from "./components/sw-calendar/sw-calendar.component";
import { SwMonthCalendarHeaderComponent } from "./components/sw-month-calendar-header/sw-month-calendar-header.component";
import { SwMonthCalendarComponent } from "./components/sw-month-calendar/sw-month.component";

@NgModule({
    imports: [SwIconModule, CommonModule],
    declarations: [SwCalendarComponent, SwMonthCalendarComponent, SwMonthCalendarHeaderComponent],
    exports: [SwCalendarComponent]
})
export class SwDatePickerModule {}