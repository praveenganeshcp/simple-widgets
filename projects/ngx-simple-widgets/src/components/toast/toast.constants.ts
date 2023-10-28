import { InjectionToken } from '@angular/core';

export const SW_TOAST_DATA = new InjectionToken('SW_TOAST_DATA');

export interface SwToastConfig {
  message: string;
  title?: string;
  closeAfter?: number;
}

export enum SwToastStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  WARN = 'WARN',
}

export interface SwToastOverlayConfig extends SwToastConfig {
  status: SwToastStatus;
}
