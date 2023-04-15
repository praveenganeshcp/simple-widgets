import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Observable, map } from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'sw-form-control',
    templateUrl: './sw-form-control.component.html',
    styleUrls: [
        `./sw-form-control.component.scss`
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwFormControlComponent {

    @Input() forId: string = '';

    @Input() label: string = '';

    @Input() error: string = '';

}