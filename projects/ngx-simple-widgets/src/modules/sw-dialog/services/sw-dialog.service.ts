import { Injectable, Injector } from "@angular/core";
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";
import { SwDialogRef } from "../models/dialog.ref";
import { SW_DIALOG_DATA } from "../sw-dialog.constant";
import { SwDialogConfig } from "../models/dialog.config";

@Injectable()
export class SwDialogService {
    constructor(
        private overlay: Overlay,
        private injector: Injector
    ) {}

    private createInjector<I,O>(data: I | null, swDialogRef: SwDialogRef<O>): Injector {
        const injector = Injector.create({
            providers: [
                {
                    provide: SW_DIALOG_DATA,
                    useValue: data
                },
                {
                    provide: SwDialogRef,
                    useValue: swDialogRef
                }
            ],
            parent: this.injector
        })
        return injector;
    }

    open<I, O>(component: ComponentType<unknown>, config: SwDialogConfig<I> = {}): SwDialogRef<O> {
        let positionStrategy 
            = this.overlay.position().global().centerHorizontally().centerVertically();

        const ref = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,  
        })

        const swDialogRef = new SwDialogRef<O>(ref);

        const portal = new ComponentPortal(
            component, 
            null, 
            this.createInjector<I,O>(config.data || null, swDialogRef)
        );

        ref.attach(portal);

        ref.backdropClick().subscribe(_ => {
            swDialogRef.close(null);
        })

        return swDialogRef;
    }
}