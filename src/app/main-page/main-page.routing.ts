import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from '../main-page/main-page.component';
import { WorksPageComponent } from '../works-page/works-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent, children: [
    {path: 'works', component: WorksPageComponent},
    {path: 'about', component: AboutPageComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRouting {}
