import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { SwToastOverlayConfig, SwToastStatus } from './models/toast.config';
import { SW_TOAST_DATA } from './toast.constants';

@Component({
  selector: 'sw-toast-host',
  templateUrl: './toast-host.component.html',
  styleUrls: ['./toast-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwToastHostComponent {

  private cssClassMap: Map<SwToastStatus, string> = new Map();
  private iconNameMap: Map<SwToastStatus, string> = new Map();

  constructor(
    @Inject(SW_TOAST_DATA) public toastConfig: SwToastOverlayConfig
  ) {
    this.initializeCssClasses();
    this.initializeIconNameMap();
   }

  initializeCssClasses() {
    this.cssClassMap.set(SwToastStatus.SUCCESS, 'info-success-bg');
    this.cssClassMap.set(SwToastStatus.WARN, 'info-warn-bg');
    this.cssClassMap.set(SwToastStatus.ERROR, 'info-error-bg');
  }

  initializeIconNameMap() {
    this.iconNameMap.set(SwToastStatus.SUCCESS, 'done');
    this.iconNameMap.set(SwToastStatus.WARN, 'warning');
    this.iconNameMap.set(SwToastStatus.ERROR, 'error');
  }
  
  get title() {
    return this.toastConfig.title;
  }

  get message() {
    return this.toastConfig.message;
  }

  get status() {
    return this.toastConfig.status;
  }

  get toastCssClass() {
    return this.cssClassMap.get(this.toastConfig.status) || ''
  }

  get iconName() {
    return this.iconNameMap.get(this.toastConfig.status) || '';
  }

  readonly toastStatus = SwToastStatus;
}
