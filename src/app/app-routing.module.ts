import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  // {path: 'about', loadChildren: './about-page/about-page.module#AboutPageModule'},
  // {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  // {path: 'works', loadChildren: './works-page/works-page.module#WorksPageModule'},
  // {path: 'blog', loadChildren: './blog-page/blog-page.module#BlogPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
