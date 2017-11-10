import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AdminComponent,
    WorksComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
