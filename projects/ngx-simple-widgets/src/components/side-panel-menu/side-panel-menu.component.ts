import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SwIconComponent } from '../icon/icon.component';
import { RouterModule } from '@angular/router';
import { SwSidepanelMenuItem } from './types';

@Component({
  selector: 'sw-side-panel-menu',
  templateUrl: './side-panel-menu.component.html',
  styleUrls: ['./side-panel-menu.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, NgFor, SwIconComponent, RouterModule],
})
export class SwSidePanelMenuComponent {
  @Input() menuItems: SwSidepanelMenuItem[] = [];
}
