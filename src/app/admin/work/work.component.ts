import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Works } from '../../shared/models/works.model';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkComponent implements OnInit {
  form: FormGroup;
  fileSrc: string;
  work: Works;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name' : new FormControl(null),
      'content' : new FormControl(null),
      'href' : new FormControl(null),
      'img' : new FormControl(null)
    });
  }
  addWorks() {
    const formData = this.form.value;
    formData.img = './../../assets/img/' + this.fileSrc;
     console.log(formData);
    //  добавлени работы
    this.httpService.addWork(formData)
      .subscribe((val) => {
        console.log(val);
      });
  }
  change(e: Event) {
     this.fileSrc = e.srcElement['files'][0].name;
  }
}
