import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

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
import { AuthGuard } from './shared/services/auth-guard.service';
import { ThrottleService } from './shared/services/throttle.service';

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
    BlogPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    HttpService,
    AuthService,
    AuthGuard,
    ThrottleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
