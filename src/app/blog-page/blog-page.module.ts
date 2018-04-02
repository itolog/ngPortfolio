import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogPageComponent } from './blog-page.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
   ],
  declarations: [
    BlogPageComponent
  ]
  
})
export class BlogPageModule { }
