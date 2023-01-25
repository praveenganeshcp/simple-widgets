import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { DEFAULT_SW_BUTTON_SIZE, SwButtonSizes } from '../../sw-button.constants';

@Component({
  selector: ` 
    button[sw-primary-button],
    button[sw-danger-button],
    button[sw-bordered-button],
    button[sw-text-button],
    button[sw-bordered-icon-button],
    button[sw-icon-button],
  `,
  templateUrl: './sw-button.component.html',
  styleUrls: ['./sw-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwButtonComponent {

    @Input() size: SwButtonSizes = DEFAULT_SW_BUTTON_SIZE;

    showLoader: boolean = false;

    private buttonSizeCSSClasses: Record<SwButtonSizes, string> = {
        [SwButtonSizes.small]: 'sw-button-small',
        [SwButtonSizes.medium]: 'sw-button-medium',
        [SwButtonSizes.large]: 'sw-button-large'
    }

    @Input() 
    set showLoaderUntil(subscription: Subscription | null) {
        if(subscription !== null) {
            this.showLoader = true;
            subscription.add(() => {
                this.showLoader = false;
            })
        }
    }

    constructor() { }

    @HostBinding('disabled')
    get disabled() {
        return this.showLoader;
    }

    @HostBinding('attr.is-loading') 
    get isLoading() {
        return this.showLoader;
    }

    @HostBinding('class')
    get buttonClass() {
        return this.buttonSizeCSSClasses[this.size];
    }

}
