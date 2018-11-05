import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAnalyticsRoutingModule } from './dashboard-analytics-routing.module';
import { DashboardAnalyticsComponent } from './dashboard-analytics.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardAnalyticsRoutingModule,
    SharedModule
  ],
  declarations: [DashboardAnalyticsComponent]
})
export class DashboardAnalyticsModule { }
