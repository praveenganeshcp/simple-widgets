import { OverlayRef } from "@angular/cdk/overlay";
import { Subject, Observable } from "rxjs";

export class SwDialogRef<O> {
    constructor(private readonly ref: OverlayRef) {}

    private _afterClosed$: Subject<O | null> = new Subject<O | null>();

    afterClosed$: Observable<O | null> = this._afterClosed$.asObservable();

    close(data: O | null) {
        this._afterClosed$.next(data);
        this.ref.dispose();
    }
}