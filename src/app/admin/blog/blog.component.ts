import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {
  formBlog: FormGroup;
  constructor() { }

  ngOnInit() {
    this.formBlog = new FormGroup({
      'name' : new FormControl(null),
      'content' : new FormControl(null),
      'date' : new FormControl(null)
    });
  }
  addPosts() {
    const formData = this.formBlog.value;
    console.log(formData);
  }
}
