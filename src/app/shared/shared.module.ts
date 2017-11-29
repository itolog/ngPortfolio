import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SociaLinkComponent} from './socia-link/socia-link.component';
import {HeroComponent} from './hero/hero.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FooterRoutingModule } from './footer/footer-routing.module';

@NgModule({
  declarations: [
    SociaLinkComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [
    SociaLinkComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {}
