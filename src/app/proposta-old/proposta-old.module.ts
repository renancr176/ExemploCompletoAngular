import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropostaRoutingModuleOld } from './proposta-routing-old.module';
import { PropostaComponentOld } from './proposta-old.component';
import {SharedModule} from '../shared/shared.module';


// Para consumir APIs via HTTP
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    PropostaRoutingModuleOld,
    SharedModule,
    FormsModule, // Para consumir APIs via HTTP
    HttpModule // Para consumir APIs via HTTP
  ],
  declarations: [PropostaComponentOld]
})
export class PropostaModuleOld { }
