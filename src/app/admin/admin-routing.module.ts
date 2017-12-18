import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from '../main-page/main-page.component';
import {AdminComponent} from './admin.component';
import {BlogComponent} from './blog/blog.component';
import { WorkComponent } from './work/work.component';


const route: Routes = [
  {path: 'admin', component: AdminComponent, children: [
    // {path: 'admin', pathMatch: 'full', redirectTo: 'blog'},
    {path: 'work', component: WorkComponent},
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
