import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SwAllowedSizes } from '../../../../shared/constants';

@Component({
  selector: 'sw-icon',
  templateUrl: './sw-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sw-icon.component.scss'],
})
export class SwIconComponent {

    @Input() name: string = '';

    @Input() size: SwAllowedSizes = 'md';

    private iconSizeAndCssClassMap: Record<SwAllowedSizes, string> = {
        'sm': 'sw-small-icon',
        'md': 'sw-medium-icon',
        'lg': 'sw-large-icon'
    }

    constructor() {}

    get iconSizeClass(): string {
      return this.iconSizeAndCssClassMap[this.size];
    }

}
