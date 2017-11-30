import {Component, OnInit} from '@angular/core';

import {modalAnim} from '../animations/modal.animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './modal.component.scss'],
  animations: [modalAnim]
})
export class HeaderComponent implements OnInit {
  isVisible = true;
  modalStatus = 'hide';
  constructor() {}
  ngOnInit() {
  }
  oneScrollDown() {
    window.scrollBy(0, window.innerHeight);
  }
  modalShow() {
    this.modalStatus = this.modalStatus === 'show' ? 'hide' : 'show';
    this.isVisible = this.isVisible === true ? false : true;
  }
}


