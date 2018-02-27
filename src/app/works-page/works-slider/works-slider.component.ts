import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-works-slider',
  templateUrl: './works-slider.component.html',
  styleUrls: ['./works-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorksSliderComponent implements OnInit {
  work;
  id= 1;
  constructor(private http: HttpService) {
     this.http.getWorks().subscribe(val => {
      this.work = val;
    });
   }
  ngOnInit() { }
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
