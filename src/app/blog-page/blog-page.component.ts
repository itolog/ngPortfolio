import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPageComponent implements OnInit {
  // toggle = true;
  posts = [];
  constructor(private http: HttpService) {
    // Get Posts from Firebase
    this.http.getPosts().subscribe((data) => this.posts = data);
   }
  ngOnInit() {
    
  }
  // Функция смены текста кнопки
  // showAll(evt) {
  //   this.toggle = this.toggle = !this.toggle;
  //   evt.target.previousElementSibling.classList.toggle('mini');
  //   evt.target.innerText = this.toggle ? 'Читать полностью' : 'Скрыть';
  // }
}
