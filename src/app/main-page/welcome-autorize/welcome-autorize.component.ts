import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {MainPageComponent} from '../main-page.component';
import { UserService } from './user.service';
import { User } from '../../user';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-welcome-autorize',
  templateUrl: './welcome-autorize.component.html',
  styleUrls: ['./welcome-autorize.component.scss']
})
export class WelcomeAutorizeComponent implements OnInit {
  form: FormGroup;
  user: User[] = [];
  message: Message;
  constructor(
    private hide: MainPageComponent,
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.message = new Message('danger', '');
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
  logIn() {
    const formData = this.form.value;
    this.userService.getUser().subscribe((data) => {
     this.user  = data[0];
      if (this.user['login'] === formData.login && this.user['password'] === formData.password) {
        this.router.navigate(['/admin']);
      } else {
        this.showMessage({
          text: 'Неверный пароль или логин!',
          type: 'danger'
        });
      }
    });
  }
}
