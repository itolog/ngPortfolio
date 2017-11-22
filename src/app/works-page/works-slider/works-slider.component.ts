import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Works } from '../../shared/models/works.model';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-works-slider',
  templateUrl: './works-slider.component.html',
  styleUrls: ['./works-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slider', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
          opacity: 1
        })),
        transition('start => end', [
          animate(1000)
        ])
    ])
  ]
})
export class WorksSliderComponent implements OnInit {
  work: Works[];
  state = 'start';
  id= 1;
  constructor(private worksServise: HttpService) { }
  ngOnInit() {
    this.worksServise.getWorks()
      .subscribe((data) => {
        this.work = data['works'];
      });
  }
  next() {
    this.id++;
    if (this.id > this.work.length) {
      this.id = 1;
    }
  }
  prev() {
    this.id--;
    if (this.id <= 0) {
      this.id = this.work.length;
    }
  }
}
