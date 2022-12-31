import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, PortalInjector } from "@angular/cdk/portal";
import { Injectable, InjectionToken, Injector } from "@angular/core";
import { SwToastHostComponent } from "../components/sw-toast-host/sw-toast-host.component";
import { SwToastConfig, SwToastOverlayConfig, SwToastStatus } from "../models/sw-toast.config";
import { SW_TOAST_DATA } from "../sw-toast.constants";

@Injectable()
export class SwToastService {

    constructor(
        private overlay: Overlay,
        private injector: Injector
    ) {}

    private createToastMessage(status: SwToastStatus, config: SwToastConfig): OverlayRef {
        const positionStrategy = this.overlay.position().global().top('85vh').left('75vw');
        const overlayRef = this.overlay.create({
            positionStrategy
        })
        const injectionTokens = new WeakMap<InjectionToken<string>, SwToastOverlayConfig>();
        injectionTokens.set(SW_TOAST_DATA, {
            ...config, status
        })
        const toastPortalInjector = new PortalInjector(this.injector, injectionTokens);
        const componentPortal = new ComponentPortal(SwToastHostComponent, null, toastPortalInjector);
        overlayRef.attach(componentPortal);
        this.clearToastMessage(overlayRef, config.closeAfter);
        return overlayRef;
    }

    success(config: SwToastConfig) {
        const ref = this.createToastMessage(SwToastStatus.SUCCESS, config);
    }

    private clearToastMessage(ref: OverlayRef, closeAfter?: number) {
        setTimeout(() => {
            ref.dispose();
        }, closeAfter || 2000);
    }
}