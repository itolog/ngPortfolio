import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  // {path: 'about', loadChildren: 'app/about-page/about-page.module#AboutPageModule'},
  // {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
  // {path: 'works', loadChildren: 'app/works-page/works-page.module#WorksPageModule'},
  // {path: 'blog', loadChildren: 'app/blog-page/blog-page.module#BlogPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
