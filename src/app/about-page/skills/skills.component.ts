import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('skillAnim', [
      state('start', style({
        opacity: 0,
        strokeDasharray: 1200,
        strokeDashoffset: 1200
      })),
      state('end', style({
        strokeDasharray: 1200,
        strokeDashoffset: 0
      })),
      transition('start => end', [
        animate(1400, style({
          opacity: 1
        })),
        animate(800)
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit, OnDestroy {
  animStatus = 'start';
  animStatusB = 'start';
  animStatusW = 'start';
  @ViewChild('frontend') frontEl: ElementRef;
  @ViewChild('beckend') beckEl: ElementRef;
  @ViewChild('workflow') workfEl: ElementRef;
  Frontend = [
    {
      'title': 'Frontend',
      'skill': ['HTML 5', 'CSS 3', 'JS'],
      'id': 1
    }
  ];
  Workflow = [
    {
      'title': 'Workflow',
      'skill': ['GULP', 'SASS', 'BEM'],
      'id': 1
    }
  ];
  Beckend = [
    {
      'title': 'Beckend',
      'skill': ['nodeJS', 'NPM'],
      'id': 1
    }
  ];
  constructor() { }
  y = window.scrollY;
  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
    const topScroll = window.scrollY  - 120;
    const frontTop = this.frontEl.nativeElement.offsetTop;
    const beckTop = this.beckEl.nativeElement.offsetTop;
    const workfTop = this.workfEl.nativeElement.offsetTop;
    if (topScroll >= frontTop) {
      this.animStatus = 'end';
    }
    if (topScroll > beckTop) {
      this.animStatusB = 'end';
    }
    if (topScroll >= workfTop) {
      this.animStatusW = 'end';
    }
  }
}
