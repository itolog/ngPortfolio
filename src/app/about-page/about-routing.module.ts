import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutPageComponent} from './about-page.component';


const route: Routes = [
  {path: 'about', component: AboutPageComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {}
