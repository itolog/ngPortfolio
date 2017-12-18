import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { WorksPageComponent } from './works-page.component';

const routes: Routes = [
  { path: 'works', component: WorksPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}
