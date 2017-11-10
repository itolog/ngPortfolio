import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {MainPageComponent} from '../main-page.component';

@Component({
  selector: 'app-welcome-autorize',
  templateUrl: './welcome-autorize.component.html',
  styleUrls: ['./welcome-autorize.component.scss']
})
export class WelcomeAutorizeComponent implements OnInit {

  constructor(private hide: MainPageComponent, private router: Router) { }
  ngOnInit() {
  }
  isVisibleFalse() {
    this.hide.isVisible = false;
  }
  logIn() {
    this.router.navigate(['/admin']);
  }
}
