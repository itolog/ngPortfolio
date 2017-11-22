import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import { MainPageComponent } from './main-page.component';
import { AutorizeComponent } from './autorize/autorize.component';
import { WelcomeMainComponent } from './welcome-main/welcome-main.component';
import { WelcomeAutorizeComponent } from './welcome-autorize/welcome-autorize.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageRouting } from './main-page.routing';

@NgModule({
  declarations: [
    MainPageComponent,
    AutorizeComponent,
    WelcomeMainComponent,
    WelcomeAutorizeComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MainPageRouting
  ]
})
export class MainPageModule {}
