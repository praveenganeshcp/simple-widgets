import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { SwAllowedSizes } from '../../shared/constants';
import { CanBeNull } from '../../shared/types';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SwLoaderComponent } from "../loader/loader.component";
import { SwIconComponent } from "../icon/icon.component";

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
  imports: [CommonModule, SwIconComponent, SwLoaderComponent],
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwButtonComponent {

    @Input() size: CanBeNull<SwAllowedSizes> = 'md';

    @Input() showLoader: CanBeNull<boolean> = false;

    @Input() disabled: CanBeNull<boolean> = false;

    @Input() iconName: CanBeNull<string> = "";

    private readonly buttonSizeCSSClasses: Record<SwAllowedSizes, string> = {
        'sm': 'sw-small-button',
        'md': 'sw-medium-button',
        'lg': 'sw-large-button'
    }

    @HostBinding("disabled")
    get isDisabled() {
        return this.disabled || this.showLoader;
    }

    @HostBinding("attr.showing-loader")
    get showingLoader() {
        return this.showLoader;
    }

    @HostBinding("attr.size")
    get buttonSize() {
        return this.size;
    }

    constructor() { }

    @HostBinding('class')
    get buttonClass() {
        return this.buttonSizeCSSClasses[<SwAllowedSizes>this.size];
    }

}
