import { Component, forwardRef } from "@angular/core";
import { state, style, transition, animate, trigger } from "@angular/animations";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'sw-switch',
    templateUrl: './sw-switch.component.html',
    styleUrls: ['./sw-switch.component.scss'],
    animations: [
        trigger('switch-state', [
            state('on', style({
                transform: 'translate(20px, 0px)'
            })),
            state('off', style({
                transform: 'translate(0px, 0px)'
            })),
            transition('on <=> off', [
                animate('0.2s')
            ])
        ])
    ],
    providers: [     
        {       
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => SwSwitchComponent),
            multi: true     
        }   
    ]
})
export class SwSwitchComponent implements ControlValueAccessor {

    state: boolean = false;

    private onChange: Function | null = null;

    private onTouched: Function | null = null;

    writeValue(state: boolean): void {
        this.state = state;
    }

    registerOnChange(onChange: Function): void {
        this.onChange = onChange;
    }

    toggle() {
        this.state = ! this.state;
        if(this.onChange) {
            this.onChange(this.state);
        }
    }

    registerOnTouched(onTouched: Function): void {
        this.onTouched = onTouched;
    }

    setDisabledState?(isDisabled: boolean): void {
        console.log(isDisabled);
    }
    
}