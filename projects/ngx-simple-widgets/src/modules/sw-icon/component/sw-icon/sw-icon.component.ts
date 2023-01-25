import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DEFAULT_SW_ICON_SIZE, SwIconSize } from '../../sw-icon.constants';

@Component({
  selector: 'sw-icon',
  templateUrl: './sw-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sw-icon.component.scss'],
})
export class SwIconComponent {

    @Input() name: string = '';

    @Input() size: SwIconSize = DEFAULT_SW_ICON_SIZE;

    private iconSizeAndCssClassMap = new Map<SwIconSize, string>();

    constructor() {
      this.iconSizeAndCssClassMap.set(SwIconSize.small, 'sw-icon-small');
      this.iconSizeAndCssClassMap.set(SwIconSize.medium, 'sw-icon-medium');
      this.iconSizeAndCssClassMap.set(SwIconSize.large, 'sw-icon-large');
    }

    get iconSizeClass() {
      return this.iconSizeAndCssClassMap.get(this.size);
    }

}
