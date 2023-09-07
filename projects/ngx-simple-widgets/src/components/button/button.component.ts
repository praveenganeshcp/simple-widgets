import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { SwAllowedSizes } from '../../shared/constants';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: ` 
    button[sw-primary-button],
    button[sw-danger-button],
    button[sw-bordered-button],
    button[sw-text-button],
    button[sw-bordered-icon-button],
    button[sw-icon-button],
  `,
  templateUrl: './button.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwButtonComponent {

    @Input() size: SwAllowedSizes = 'md';

    @Input() showLoader: boolean = false;

    @Input() disabled: boolean = false;

    private readonly buttonSizeCSSClasses: Record<SwAllowedSizes, string> = {
        'sm': 'sw-small-button',
        'md': 'sw-medium-button',
        'lg': 'sw-large-button'
    }

    @HostBinding("attr.disabled")
    get isDisabled() {
        return this.disabled;
    }

    constructor() { }

    @HostBinding('attr.is-loading') 
    get isLoading() {
        return this.showLoader;
    }

    @HostBinding('class')
    get buttonClass() {
        return this.buttonSizeCSSClasses[this.size];
    }

}
