import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  @ViewChild('content') content: ElementRef;
  isVisible = false;
  constructor(private render: Renderer2) { }
  listenerFn: () => void;
  ngOnInit() {
    this.listenerFn = this.render.listen(document, 'mousemove', (e) => {
      const clientX = e.pageX,
            clientY = e.pageY,
            initialX = (window.innerWidth / 2) - clientX,
            initialY = (window.innerHeight / 2) - clientY;
      this.render.setStyle(this.content.nativeElement, 'transform', `translate3d(${initialX / 80}px, ${initialY / 80}px, 0)`);
    });
    }
  ngOnDestroy() {
    if (this.listenerFn) {
      this.listenerFn();
    }
    }
}
