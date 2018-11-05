import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropostaComponentOld} from './proposta-old.component';

const routes: Routes = [
  {
    path: '',
    component: PropostaComponentOld,
    data: {
      breadcrumb: 'Proposta',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropostaRoutingModuleOld { }
