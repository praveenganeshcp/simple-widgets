import { ChangeDetectionStrategy, Component, Input, HostListener, ElementRef, HostBinding } from "@angular/core";
import { SwAllowedSizes } from "../../../../shared/constants";
import { BehaviorSubject, Subject } from "rxjs";

@Component({
    selector: `
        input[type="text"][sw-input],
        input[type="number"][sw-input],
        input[type="password"][sw-input],
        input[type="email"][sw-input],
    `,
    templateUrl: './sw-input.component.html',
    styleUrls: [
        './sw-input.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwInputComponent {
    @Input() size: SwAllowedSizes = "md";

    private _isActive$ = new BehaviorSubject(false);

    private sizeCssClassMap: Record<SwAllowedSizes, string> = {
        'sm': 'sw-small-input',
        'md': 'sw-medium-input',
        'lg': 'sw-large-input'
    };

    constructor(
        private element: ElementRef
    ) { }

    get isValuePresent(): boolean {
        return (this.element.nativeElement as HTMLInputElement).value.length > 0;
    }

    @HostBinding("class") get inputClass(): string {
        return this.sizeCssClassMap[this.size];
    }

    @HostListener('focus')
    setActive() {
        this._isActive$.next(true);
    }

    @HostListener('blur')
    setBlur() {
        this._isActive$.next(false);
    }

    get isActive$() {
        return this._isActive$.asObservable();
    }
}