import {Component, OnInit, ViewChild, OnDestroy, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
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
  constructor(private render: Renderer2) { }
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
     this.render.addClass(this.frontEl.nativeElement, 'flipInY');
    }
    if (topScroll > beckTop) {
      this.render.addClass(this.beckEl.nativeElement, 'zoomInLeft');
    }
    if (topScroll >= workfTop) {
      this.render.addClass(this.workfEl.nativeElement, 'bounceInRight');
    }
  }
}
