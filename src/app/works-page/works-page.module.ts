import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorksPageComponent} from './works-page.component';
import {SharedModule} from '../shared/shared.module';
import { WorksSliderComponent } from './works-slider/works-slider.component';
import { WriteMeComponent } from './write-me/write-me.component';
import {ReactiveFormsModule} from '@angular/forms';
import { WorksPageRouting } from './works-page.routing.module';



@NgModule({
  declarations: [
    WorksPageComponent,
    WorksSliderComponent,
    WriteMeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    WorksPageRouting
  ]
})
export class WorksPageModule {}
