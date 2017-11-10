import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-welcome-main',
  templateUrl: './welcome-main.component.html',
  styleUrls: ['./welcome-main.component.scss'],
  animations: [
    trigger('heroState', [
      state('start', style({
        transform: 'rotateY(360deg)'
      })),
      transition('void => start', animate(1500))
    ])
  ]
})
export class WelcomeMainComponent implements OnInit {
  animState = '';
  constructor() {
  }
  ngOnInit() {
    this.animState = 'start';
  }
}
