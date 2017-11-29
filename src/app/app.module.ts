import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainPageModule} from './main-page/main-page.module';
import {SharedModule} from './shared/shared.module';
import { AuthService } from './shared/services/auth.service';
import { HttpService } from './shared/services/http.service';
import { AboutPageModule } from './about-page/about-page.module';
import { AdminModule } from './admin/admin.module';
import { WorksPageModule } from './works-page/works-page.module';
import { BlogPageModule } from './blog-page/blog-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainPageModule,
    AboutPageModule,
    AdminModule,
    WorksPageModule,
    BlogPageModule
  ],
  providers: [
    HttpService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
