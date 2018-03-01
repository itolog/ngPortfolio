import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  formBlog: FormGroup;
  postDel: FormGroup;
  id: number;
  title = [];
  constructor(private http: HttpService) {
    // Формируем ID
    this.http.getPosts().subscribe((data) => {
      this.id = data.length;
      this.title = data;
    });
   }

  ngOnInit() {
    // Add Post
    this.formBlog = new FormGroup({
      'title' : new FormControl(null),
      'content' : new FormControl(null),
      'date' : new FormControl(null),
      "link": new FormControl(null)
    });
    // DEL Post
    this.postDel = new FormGroup({
      "del" : new FormControl(null)
    });
  }
  addPosts() {
    const formData = this.formBlog.value;
    this.http.addPost(formData.title, {
      "content": formData.content,
      "date": formData.date,
      "title": formData.title,
      "id": this.id +1 + formData.title,
      "link": formData.link
    });
  }
  delPost(evt) {
    const el = this.postDel.value.del;
    this.http.delPost(el);
  }
}
