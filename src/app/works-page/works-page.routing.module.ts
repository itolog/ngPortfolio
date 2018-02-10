import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { WorksPageComponent } from './works-page.component';

const route: Routes = [
  { path: 'works', component: WorksPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class WorksPageRouting {}
