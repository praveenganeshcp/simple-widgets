import { Component, HostBinding, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: ` 
    button[sw-primary-button],
    button[sw-warning-button],
    button[sw-bordered-button]
  `,
  templateUrl: './sw-button.component.html',
  styleUrls: ['./sw-button.component.scss']
})
export class SwButtonComponent {

    showLoader: boolean = false;

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

}
