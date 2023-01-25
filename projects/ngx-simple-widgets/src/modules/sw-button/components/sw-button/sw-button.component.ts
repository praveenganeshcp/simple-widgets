import { Component, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { DEFAULT_SW_BUTTON_SIZE, SwButtonSizes } from '../../sw-button.constants';

@Component({
  selector: ` 
    button[sw-primary-button],
    button[sw-danger-button],
    button[sw-bordered-button]
    button[sw-icon-button]
  `,
  templateUrl: './sw-button.component.html',
  styleUrls: ['./sw-button.component.scss']
})
export class SwButtonComponent {

    @Input() size: SwButtonSizes = DEFAULT_SW_BUTTON_SIZE;

    showLoader: boolean = false;

    private buttonSizeCSSClassMap = new Map<SwButtonSizes, string>();

    @Input() 
    set showLoaderUntil(subscription: Subscription | null) {
        if(subscription !== null) {
            this.showLoader = true;
            subscription.add(() => {
                this.showLoader = false;
            })
        }
    }

    constructor() { 
        this.buttonSizeCSSClassMap.set(SwButtonSizes.small, 'sw-button-small');
        this.buttonSizeCSSClassMap.set(SwButtonSizes.medium, 'sw-button-medium');
        this.buttonSizeCSSClassMap.set(SwButtonSizes.large, 'sw-button-large');
    }

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
        return this.buttonSizeCSSClassMap.get(this.size);
    }

}
