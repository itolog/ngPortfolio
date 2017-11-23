import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { WorksPageComponent } from './works-page.component';
import { MainPageComponent } from '../main-page/main-page.component';


const routes: Routes = [
  { path: '', component: WorksPageComponent, children: [
    {path: '', component: MainPageComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
