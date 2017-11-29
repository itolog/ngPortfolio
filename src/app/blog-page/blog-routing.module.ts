import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { BlogPageComponent } from './blog-page.component';

const route: Routes = [
  {path: '', component: BlogPageComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingmodule {}
