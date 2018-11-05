import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { PropostaRoutingModule } from './proposta-routing.module';
import { PropostaComponent } from './proposta.component';

// Para consumir APIs via HTTP
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PropostaRoutingModule,
    FormsModule, // Para consumir APIs via HTTP
    HttpModule // Para consumir APIs via HTTP
  ],
  declarations: [PropostaComponent]
})
export class PropostaModule { }
