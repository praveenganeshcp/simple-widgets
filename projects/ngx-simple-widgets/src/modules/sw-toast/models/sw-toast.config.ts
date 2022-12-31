export interface SwToastConfig {
    message: string;
    title?: string;
    closeAfter?: number
}

export enum SwToastStatus {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING"
}

export interface SwToastOverlayConfig extends SwToastConfig {
    status: SwToastStatus
}