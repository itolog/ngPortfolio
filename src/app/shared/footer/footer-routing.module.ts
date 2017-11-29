import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AboutPageComponent } from '../../about-page/about-page.component';
import { WorksPageComponent } from '../../works-page/works-page.component';
import { MainPageComponent } from '../../main-page/main-page.component';
import { BlogPageComponent } from '../../blog-page/blog-page.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'works', component: WorksPageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FooterRoutingModule {}
