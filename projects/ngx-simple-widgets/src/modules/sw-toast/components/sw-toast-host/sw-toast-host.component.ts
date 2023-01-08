import { Component, Inject } from '@angular/core';
import { SwToastOverlayConfig, SwToastStatus } from '../../models/sw-toast.config';
import { SW_TOAST_DATA } from '../../sw-toast.constants';

@Component({
  selector: 'sw-sw-toast-host',
  templateUrl: './sw-toast-host.component.html',
  styleUrls: ['./sw-toast-host.component.scss']
})
export class SwToastHostComponent {

  constructor(
    @Inject(SW_TOAST_DATA) public toastConfig: SwToastOverlayConfig
  ) { }

  get title() {
    return this.toastConfig.title;
  }

  get message() {
    return this.toastConfig.message;
  }

  get status() {
    return this.toastConfig.status;
  }

  readonly toastStatus = SwToastStatus;
}
