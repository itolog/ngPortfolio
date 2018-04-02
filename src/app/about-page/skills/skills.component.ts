import {Component, OnInit, ViewChild, OnDestroy, ElementRef, Renderer2} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ThrottleService } from '../../shared/services/throttle.service';

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
      'skill': [],
      'id': 1
    }
  ];
  Workflow = [
    {
      'title': 'Workflow',
      'skill': [],
      'id': 1
    }
  ];
  Beckend = [
    {
      'title': 'Beckend',
      'skill': [],
      'id': 1
    }
  ];
  constructor(
    private render: Renderer2, 
    db: AngularFireDatabase,
    private throttle: ThrottleService
  ) { 
    db.list('/frontend').valueChanges().subscribe(val => {
      this.Frontend[0]['skill'] = val;
    });
    db.list('/workflow').valueChanges().subscribe(val => {
      this.Workflow[0]['skill'] = val;
    });
    db.list('/backend').valueChanges().subscribe(val => {
      this.Beckend[0]['skill'] = val;
    });
  }
  ngOnInit() {
    window.addEventListener('scroll',  this.throttle.throttle(this.scroll), true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.throttle.throttle(this.scroll), true);
  }
  
  // SCroll fn
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
