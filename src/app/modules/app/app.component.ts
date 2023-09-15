import { Component } from '@angular/core';
import { SW_TOOLTIP_POSITION } from "ngx-simple-widgets"; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-widgets';

  SwTooltipPosition = SW_TOOLTIP_POSITION;

  sayHello() {
    console.log("hello  11")
  }
}
