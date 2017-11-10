import { Component, OnInit } from '@angular/core';
import {MainPageComponent} from '../main-page.component';

@Component({
  selector: 'app-autorize',
  templateUrl: './autorize.component.html',
  styleUrls: ['./autorize.component.scss']
})
export class AutorizeComponent implements OnInit {
  constructor(private isVisible: MainPageComponent) { }

  ngOnInit() { }
  autoriz() {
    this.isVisible.isVisible =  true;
  }
}
