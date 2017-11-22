import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AdminComponent,
    BlogComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
