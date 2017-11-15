import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
      transition('start=> end', [
        animate('1000ms')
      ]),
      state('end', style({
          opacity: 1
        })),
        transition('* <=> *', [
          animate(1000)
        ])
    ])
  ]
})
export class WorksSliderComponent implements OnInit {
  work: any = [
    {name: 'PORTFOLIO ANGULAR',
      id: 1,
      img: './../../assets/img/pf.jpg',
      href: 'http://neolife.orgfree.com/',
      content: 'html css angular'
    },
    {name: 'two',
      id: 2,
      img: './../../assets/img/mac.jpg',
      href: '',
      content: ''
    },
    {name: 'threeeee',
      id: 3,
      img: '',
      href: '',
      content: ''
    }
  ];
  state = '';
  id= 1;
  constructor() { }
  ngOnInit() {
  }
  next() {
     // this.state = 'end';
    this.id++;
    if (this.id > this.work.length) {
      this.id = 1;
    }
  }
  prev() {
    this.id--;
     // this.state = 'prev';
    if (this.id <= 0) {
      this.id = this.work.length;
    }
  }
}
