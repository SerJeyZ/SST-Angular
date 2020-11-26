import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { MaynLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { CreateReportPageComponent } from './pages/create-report-page/create-report-page.component';
import { StaffListPageComponent } from './pages/staff-list-page/staff-list-page.component';
import { CompanyProfilePageComponent } from './pages/company-profile-page/company-profile-page.component';
import { CustomersListPageComponent } from './pages/customers-list-page/customers-list-page.component';

const routes: Routes = [
  {path:'system', component:MaynLayoutComponent,children:[
    { path: 'dashboard', component: DashboardPageComponent },
    {path:'timer', component:TimerPageComponent},
    { path: 'reports', component: ReportsPageComponent },
    { path: 'calendar', component: CalendarPageComponent },
    { path: 'tasks', component: TasksPageComponent },
    { path: 'create-report', component: CreateReportPageComponent },
    { path: 'reports', component: ReportsPageComponent },
    { path: 'staff-list', component: StaffListPageComponent },
    { path: 'company-profile', component: CompanyProfilePageComponent },
    { path: 'customers-list', component: CustomersListPageComponent }
  ]}
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class SystemRoutingModule{}