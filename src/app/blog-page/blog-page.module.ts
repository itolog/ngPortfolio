import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';
import { BlogRoutingmodule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

@NgModule({
  declarations: [
    BlogPageComponent,
    BlogSidebarComponent,
    BlogPostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingmodule,
    SharedModule
   ],
  exports: [],
  providers: [],
})
export class BlogPageModule { }