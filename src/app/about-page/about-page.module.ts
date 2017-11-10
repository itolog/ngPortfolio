import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutMeComponent} from './about-me/about-me.component';
import {SkillsComponent} from './skills/skills.component';
import {AboutPageComponent} from './about-page.component';
import {MapComponent} from '../map/map.component';
import {SharedModule} from '../shared/shared.module';
import {AboutRoutingModule} from './about-routing.module';

@NgModule({
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    AboutPageComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutPageModule { }
