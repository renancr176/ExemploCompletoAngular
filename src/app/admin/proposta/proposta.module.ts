import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { PropostaRoutingModule } from './proposta-routing.module';
import { PropostaComponent } from './proposta.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PropostaRoutingModule
  ],
  declarations: [PropostaComponent]
})
export class PropostaModule { }
