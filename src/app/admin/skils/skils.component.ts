import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { isArray } from 'util';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkilsComponent implements OnInit {
  frontend;
  backend;
  workflow;
  data;
  form: FormGroup;
  constructor(private db: AngularFireDatabase) { 
    db.list('/frontend').valueChanges().subscribe(val => {
      this.frontend = val;
    });
    db.list('/backend').valueChanges().subscribe(val => {
      this.backend = val;
    });
    db.list('/workflow').valueChanges().subscribe(val => {
      this.workflow = val;
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      'sel' : new FormControl(null),
      'add' : new FormControl(null)
    });
  }
  // add Skill
  addSkill() {
   const sel = this.form.value.sel;
   let addTxt = this.form.value.add;
    const addRef = this.db.list(`${sel}`);
    // add
    addRef.set(addTxt, addTxt);
  }
  // Delete Skill
  delete(e) {
    const delAnswer = confirm('Вы точно хотите удалить?');
    const type = e.target.dataset.role;
    const el = e.target.id;
    const itemsRef = this.db.list(`/${type}/${el}`);
    if(delAnswer) {
      itemsRef.remove();
    }
  }
}
