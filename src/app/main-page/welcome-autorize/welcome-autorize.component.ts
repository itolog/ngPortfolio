import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MainPageComponent} from '../main-page.component';

@Component({
  selector: 'app-welcome-autorize',
  templateUrl: './welcome-autorize.component.html',
  styleUrls: ['./welcome-autorize.component.scss']
})
export class WelcomeAutorizeComponent implements OnInit {
  form: FormGroup;
  constructor(private hide: MainPageComponent, private router: Router) { }
  ngOnInit() {
    this.form = new FormGroup({
      'login' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  isVisibleFalse() {
    this.hide.isVisible = false;
  }
  logIn() {
    this.router.navigate(['/admin']);
  }
  onSubmit() {
    const formData = this.form.value;
    console.log(formData);
  }
}
