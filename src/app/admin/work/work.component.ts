import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import { Works } from '../../shared/models/works.model';

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
  send = false;
  workId: number;
  file;

  constructor(public db: AngularFireDatabase) {
    // Получаем все работы из базы даных
      db.list<Works>('/works').valueChanges().subscribe(val => {
        this.workId = val.length;
      });
   }

  ngOnInit() {
    this.form = new FormGroup({
      'name' : new FormControl(null),
      'content' : new FormControl(null),
      'href' : new FormControl(null),
      'img' : new FormControl(null)
    });
  }
  // function show Alert Done
  private showMessage() {
    this.send = true;
    window.setTimeout(() => {
      this.send = false;
    }, 5000);
  }

  addWorks() {
    const formData = this.form.value;
    // Добавляем изображение в базу
    formData.img =  this.fileSrc;
    formData.id = this.workId + 1;
     //  добавлени работы
    this.db.list<Works>('works', ref => ref.orderByKey()).push(formData);

    this.showMessage();
  }
  // Получаем изибражение
  change(e: Event) {
    const file = e.srcElement['files'][0];
    const myReader = new FileReader();

    myReader.onloadend = () => {
      this.fileSrc = myReader.result;
    };

    if (file) {
      myReader.readAsDataURL(file);
    } else {
      this.fileSrc = '';
    }
  }
}
