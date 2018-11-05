import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: 'simple',
        loadChildren: './basic-login/basic-login.module#BasicLoginModule'
      },
      {
        path: 'header-footer',
        loadChildren: './header-footer-login/header-footer-login.module#HeaderFooterLoginModule'
      },
      {
        path: 'social',
        loadChildren: './social-login/social-login.module#SocialLoginModule'
      },
      {
        path: 'social-header-footer',
        loadChildren: './social-header-footer-login/social-header-footer-login.module#SocialHeaderFooterLoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
