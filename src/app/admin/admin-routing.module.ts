import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from '../main-page/main-page.component';
import {AdminComponent} from './admin.component';
import {WorksComponent} from './works/works.component';
import {BlogComponent} from './blog/blog.component';


const route: Routes = [
  {path: 'admin', component: AdminComponent, children: [
    {path: '', component: MainPageComponent},
    {path: 'works', component: WorksComponent},
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
