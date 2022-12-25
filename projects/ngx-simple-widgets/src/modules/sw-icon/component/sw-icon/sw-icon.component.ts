import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sw-icon',
  templateUrl: './sw-icon.component.html',
  styleUrls: ['./sw-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwIconComponent {

    @Input() name: string = '';

    constructor() { }

}
