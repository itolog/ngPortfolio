import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {BlogComponent} from './blog/blog.component';
import { WorkComponent } from './work/work.component';
import { SkilsComponent } from './skils/skils.component';


const route: Routes = [
  {path: 'admnpanel007', component: AdminComponent, children: [
    {path: 'work', component: WorkComponent},
    {path: 'skils', component: SkilsComponent},
    {path: 'blog', component: BlogComponent}
  ]},
];
@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
