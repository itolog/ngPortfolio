import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-write-me',
  templateUrl: './write-me.component.html',
  styleUrls: ['./write-me.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WriteMeComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'name' : new FormControl(null, [Validators.required]),
      'email' : new FormControl(null, [Validators.required, Validators.email])
    });
  }
 onSubmit() {
   const formData = this.form.value;
    console.log(formData);
 }
}
