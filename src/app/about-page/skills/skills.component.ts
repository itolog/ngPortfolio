import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('skillAnim', [
      state('start', style({
        transform: 'translate3d(100%, 0, 0)',
        opacity: 0
      })),
      state('end', style({
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      })),
      transition('start => end', animate(3000))
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
      'skill': ['html5', 'css3', 'js'],
      'id': 1
    }
  ];
  Workflow = [
    {
      'title': 'Workflow',
      'skill': ['gulp', 'sass', 'BEM'],
      'id': 1
    }
  ];
  Beckend = [
    {
      'title': 'Beckend',
      'skill': ['nodeJS', 'npm'],
      'id': 1
    }
  ];
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (e: Event): void => {
    const topScroll = e.srcElement['scrollingElement'].scrollTop;
    const frontTop = this.frontEl.nativeElement.offsetTop;
    const beckTop = this.beckEl.nativeElement.offsetTop;
    const workfTop = this.workfEl.nativeElement.offsetTop;
    if (topScroll >= frontTop) {
      this.animStatus = 'end';
    }
    if (topScroll >= beckTop) {
      this.animStatusB = 'end';
    }
    if (topScroll >= workfTop) {
      this.animStatusW = 'end';
    }
  }
}
