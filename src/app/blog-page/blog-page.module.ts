import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './blog-page.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BlogPageComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
   ],
  exports: [],
  providers: [],
})
export class BlogPageModule { }
