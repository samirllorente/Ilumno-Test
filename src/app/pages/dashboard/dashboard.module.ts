import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SidenavModule } from './sidenav/sidenav.module';

import { HomeModule } from '../home/home.module';
import { NewModule } from '../new/new.module';
import { RegisterModule } from '../register/register.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FooterModule,
    HeaderModule,
    HomeModule,
    NewModule,
    RegisterModule,
    SidenavModule
  ]
})
export class DashboardModule { }
