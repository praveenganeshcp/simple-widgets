import { Component } from '@angular/core';

@Component({
  selector: ` 
    button[sw-primary-button],
    button[sw-warning-button],
    button[sw-bordered-button]
  `,
  templateUrl: './sw-button.component.html',
  styleUrls: ['./sw-button.component.scss']
})
export class SwButtonComponent {

  constructor() { }
}
