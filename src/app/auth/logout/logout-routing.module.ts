import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogOutComponent } from './logout.component';

const routes: Routes = [
  {
    path: '',
    component: LogOutComponent,
    data: {
      breadcrumb: 'Logout',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogOutRoutingModule {
}
