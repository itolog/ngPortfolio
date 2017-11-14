import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutPageComponent} from './about-page/about-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {AdminComponent} from './admin/admin.component';
import {WorksPageComponent} from './works-page/works-page.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutPageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'works', component: WorksPageComponent},
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
