import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Works } from '../../shared/models/works.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-works-slider',
  templateUrl: './works-slider.component.html',
  styleUrls: ['./works-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorksSliderComponent implements OnInit {
  work;
  id= 1;
  constructor(db: AngularFireDatabase) {
      db.list<Works>('/works').valueChanges().subscribe(val => {
      this.work = val;
    });
   }
  ngOnInit() {
    // this.worksServise.getWorks()
    //   .subscribe((data) => {
    //     // console.log(data);
    //    this.work = data;
    //   });
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
