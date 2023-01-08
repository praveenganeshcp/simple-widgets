import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sw-icon',
  templateUrl: './sw-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwIconComponent {

    @Input() name: string = '';

    constructor() { }

}
