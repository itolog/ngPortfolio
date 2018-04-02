import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

import {MainPageComponent} from '../main-page.component';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-welcome-autorize',
  templateUrl: './welcome-autorize.component.html',
  styleUrls: ['./welcome-autorize.component.scss']
})
export class WelcomeAutorizeComponent implements OnInit {
  form: FormGroup;
  user = [];
  message: Message;
  localStorage = false;
  constructor(
    private hide: MainPageComponent,
    private router: Router,
    private authService: AuthService,
    private http: HttpService
  ) {
      this.http.getUser().subscribe(val => {
        this.user = val;
      }, err => {
        this.showMessage({
          text: 'Server error!',
          type: 'danger'
        });
      });
   }
  ngOnInit() {
    // check User logIn or NOT
    if (localStorage.getItem('dataUser')) {
      this.localStorage = true;
    } else {
      this.localStorage = false;
    }
    // init msg
    this.message = new Message('danger', '');
    // validation form
    this.form = new FormGroup({
      'login' : new FormControl(null, [Validators.required]),
      'check' : new FormControl(false, [Validators.requiredTrue]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  // function message
  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
  isVisibleFalse() {
    this.hide.isVisible = false;
  }
  //  function LOGin
  logIn() {
    const formData = this.form.value;
      if (this.user[0].login === formData.login && this.user[0].password === formData.password) {
        this.message.text = '';
        window.localStorage.setItem('dataUser', JSON.stringify(this.user));
        this.authService.logIn();
        this.router.navigate(['/admnpanel007']);
      } else {
        this.showMessage({
          text: 'Неверный пароль или логин!',
          type: 'danger'
        });
      }
  }
// function to Admin
toAdmin() {
  this.router.navigate(['/admnpanel007']);
}
}
