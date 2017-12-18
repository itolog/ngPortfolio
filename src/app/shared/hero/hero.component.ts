import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor(private render: Renderer2) { }
  @ViewChild('hero') hero: ElementRef;
  @ViewChild('info') info: ElementRef;

  listenerFn: () => void;
  ngOnInit() {
    this.listenerFn = this.render.listen(window, 'scroll', (e) => {
      const strafe = window.pageYOffset / -3 + '%';
      this.render.setStyle(this.hero.nativeElement, 'transform', `translateY(${strafe})`);
      this.render.setStyle(this.info.nativeElement, 'transform', `translateX(${strafe})`);
    });
  }
  ngOnDestroy() {
    if (this.listenerFn) {
      this.listenerFn();
    }
  }

}
