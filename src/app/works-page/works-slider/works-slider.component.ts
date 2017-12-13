import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Works } from '../../shared/models/works.model';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-works-slider',
  templateUrl: './works-slider.component.html',
  styleUrls: ['./works-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorksSliderComponent implements OnInit {
  work: Works[];
  id= 1;
  constructor(private worksServise: HttpService) { }
  ngOnInit() {
    this.worksServise.getWorks()
      .subscribe((data) => {
        this.work = data[1];
      });
  }
  next() {
    this.id++;
    if (this.id > this.work.length) {
      this.id = 1;
    }
    
    console.log(this.work);
  }
  prev() {
    this.id--;
    if (this.id <= 0) {
      this.id = this.work.length;
    }
  }
}
