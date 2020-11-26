import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { SystemRoutingModule } from './system-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaynLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CompanyProfilePageComponent } from './pages/company-profile-page/company-profile-page.component';
import { CustomersListPageComponent } from './pages/customers-list-page/customers-list-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { CreateReportPageComponent } from './pages/create-report-page/create-report-page.component';
import { StaffListPageComponent } from './pages/staff-list-page/staff-list-page.component';

@NgModule({
  imports:[
    CommonModule,
    SharedModule,
    SystemRoutingModule,
    NgMaterialMultilevelMenuModule
    
  ],
  declarations:[
    MaynLayoutComponent,
    TimerPageComponent,
    ReportsPageComponent,
    DashboardPageComponent,
    SidebarComponent,
    CalendarPageComponent,
    TasksPageComponent,
    CreateReportPageComponent,
    ReportsPageComponent,
    StaffListPageComponent,
    CompanyProfilePageComponent,
    CustomersListPageComponent
  ]
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})

export class SystemModule {}