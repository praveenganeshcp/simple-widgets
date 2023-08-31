import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SwAllowedSizes } from '../../shared/constants';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'sw-icon',
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule]
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
