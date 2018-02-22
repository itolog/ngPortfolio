import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkComponent } from './work/work.component';
import { SkilsComponent } from './skils/skils.component';

@NgModule({
  declarations: [
    AdminComponent,
    BlogComponent,
    WorkComponent,
    SkilsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule      
  ]
})
export class AdminModule { }
