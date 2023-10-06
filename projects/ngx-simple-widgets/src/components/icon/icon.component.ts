import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SwAllowedSizes } from '../../shared/constants';
import { CanBeNull } from '../../shared/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sw-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SwIconComponent {

    @Input() name: CanBeNull<string> = '';

    @Input() size: CanBeNull<SwAllowedSizes> = 'md';

    private iconSizeAndCssClassMap: Record<SwAllowedSizes, string> = {
        'sm': 'sw-small-icon',
        'md': 'sw-medium-icon',
        'lg': 'sw-large-icon'
    }

    constructor() {}

    get iconSizeClass(): string {
      return `material-symbols-outlined ${this.iconSizeAndCssClassMap[this.size as SwAllowedSizes]}`;
    }

}
