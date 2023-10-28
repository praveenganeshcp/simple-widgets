import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  state,
  style,
  transition,
  animate,
  trigger,
} from '@angular/animations';
import { interval, Observable, map } from 'rxjs';

@Component({
  selector: 'sw-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('loader-state', [
      state(
        'start',
        style({
          transform: 'rotate(0deg)',
        }),
      ),
      state(
        'middle',
        style({
          transform: 'rotate(180deg)',
        }),
      ),
      state(
        'end',
        style({
          transform: 'rotate(360deg)',
        }),
      ),
      transition('start => middle', [animate('0.6s')]),
      transition('middle => end', [animate('0.6s')]),
      transition('end => start', [animate('0.6s')]),
    ]),
  ],
})
export class SwLoaderComponent {
  public loaderState$: Observable<string> = interval(700).pipe(
    map((value) => {
      const rem = value % 3;
      return rem === 0 ? 'end' : rem === 1 ? 'start' : 'middle';
    }),
  );

  constructor() {}
}
