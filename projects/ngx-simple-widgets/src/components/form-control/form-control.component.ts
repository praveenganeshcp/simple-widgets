import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
    selector: 'sw-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: [
        `./form-control.component.scss`
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class SwFormControlComponent {

    @Input() forId: string = '';

    @Input() label: string = '';

    @Input() error: string = '';

}