import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AutorizeComponent } from './main-page/autorize/autorize.component';
import { NavigationComponent } from './main-page/navigation/navigation.component';
import { WelcomeAutorizeComponent } from './main-page/welcome-autorize/welcome-autorize.component';
import { WelcomeMainComponent } from './main-page/welcome-main/welcome-main.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutPageModule} from './about-page/about-page.module';
import {MainPageModule} from './main-page/main-page.module';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {WorksPageModule} from './works-page/works-page.module';
import { UserService } from './main-page/welcome-autorize/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AutorizeComponent,
    NavigationComponent,
    WelcomeAutorizeComponent,
    WelcomeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutPageModule,
    MainPageModule,
    SharedModule,
    AdminModule,
    WorksPageModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
