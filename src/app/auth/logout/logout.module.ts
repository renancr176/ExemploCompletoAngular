import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { LogOutComponent } from './logout.component';
import { LogOutRoutingModule } from './logout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LogOutRoutingModule
  ],
  declarations: [LogOutComponent]
})
export class LogOutModule { }
