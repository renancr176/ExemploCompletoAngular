import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosComponent } from './relatorios.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RelatoriosRoutingModule
  ],
  declarations: [RelatoriosComponent]
})
export class RelatoriosModule { }
