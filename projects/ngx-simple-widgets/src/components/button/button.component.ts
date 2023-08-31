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

    showLoader: boolean = false;

    private buttonSizeCSSClasses: Record<SwAllowedSizes, string> = {
        'sm': 'sw-small-button',
        'md': 'sw-medium-button',
        'lg': 'sw-large-button'
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
