import { ConnectedPosition } from "@angular/cdk/overlay";

export enum SW_TOOLTIP_POSITION {
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export const SW_TOOLTIP_CONNECTED_POSITIONS: Record<SW_TOOLTIP_POSITION, ConnectedPosition> = {
    [SW_TOOLTIP_POSITION.BOTTOM] : {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: 10
    },
    [SW_TOOLTIP_POSITION.TOP] : {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -10
    },
    [SW_TOOLTIP_POSITION.LEFT] : {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -10
    },
    [SW_TOOLTIP_POSITION.RIGHT] : {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: 10
    }
}
