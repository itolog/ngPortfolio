import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainPageComponent} from '../main-page/main-page.component';
import {AboutPageComponent} from './about-page.component';


const route: Routes = [
  {path: 'about', component: AboutPageComponent, children: [
    {path: '', component: MainPageComponent}
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
export class AboutRoutingModule {}
