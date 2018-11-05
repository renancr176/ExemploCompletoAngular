import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropostaComponent } from './proposta.component';

const routes: Routes = [
  {
    path: '',
    component: PropostaComponent,
    data: {
      breadcrumb: 'Proposta de Extensão',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropostaRoutingModule {
}
