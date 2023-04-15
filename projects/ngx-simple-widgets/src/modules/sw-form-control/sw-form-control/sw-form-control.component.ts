import { trigger, state, style, transition, animate } from "@angular/animations";
import { ChangeDetectionStrategy, Component, ContentChild, Input } from "@angular/core";
import { SwInputComponent } from "../../sw-input/components/sw-input/sw-input.component";
import { Observable, map } from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'sw-form-control',
    templateUrl: './sw-form-control.component.html',
    styleUrls: [
        `./sw-form-control.component.scss`
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('label-state', [
            state('top', style({
                position: 'absolute',
                top: '-10px',
                backgroundColor: 'white',
                left: '10px',
                padding: '0 5px',
                fontSize: '14px',
                color: 'black'
            })),
            state('inside', style({
                position: 'absolute',
                top: '15px',
                left: '12px',
                fontSize: '16px',
                color: 'gray'
            })),
            transition('top <=> inside', [
                animate('0.3s')
            ])
        ])
    ]
})
export class SwFormControlComponent {

    @Input() forId: string = '';

    @Input() label: string = '';

    @Input() formControl!: FormControl;

    @ContentChild(SwInputComponent) swInput!: SwInputComponent;

    get labelState$(): Observable<'top' | 'inside'> {
        return this.swInput.isActive$.pipe(
            map(isActive => {
                if(this.swInput.isValuePresent) {
                    return 'top';
                }
                return isActive ? 'top' : 'inside'
            })
        )
    }

}