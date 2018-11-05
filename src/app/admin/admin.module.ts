import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRountinModule } from './admin-rountin.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRountinModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
