import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatoriosComponent } from './relatorios.component';

const routes: Routes = [
  {
    path: '',
    component: RelatoriosComponent,
    data: {
      breadcrumb: 'Relatórios',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule {
}
