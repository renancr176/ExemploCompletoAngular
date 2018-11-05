
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      //#region Home
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'proposta',
        loadChildren: './proposta/proposta.module#PropostaModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'proposta/formulario',
        loadChildren: './proposta/formulario/formulario.module#FormularioModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'proposta-old',
        loadChildren: './proposta-old/proposta-old.module#PropostaModuleOld',
        canActivate: [AuthGuard]
      }, 
      //#endregion

      //#region Admin
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuard],
        data: {accessLevel: 'restrict'}
      },
      {
        path: 'admin/proposta',
        loadChildren: './admin/proposta/proposta.module#PropostaModule',
        canActivate: [AuthGuard],
        data: {accessLevel: 'restrict'}
      },
      //#endregion

      /*{
        path: '',
        redirectTo: 'dashboard/dashboard-default',
        pathMatch: 'full'
      },*/
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'widget',
        loadChildren: './widget/widget.module#WidgetModule'
      }, {
        path: 'basic',
        loadChildren: './components/basic/basic.module#BasicModule'
      }, {
        path: 'advance',
        loadChildren: './components/advance/advance.module#AdvanceModule'
      }, {
        path: 'animations',
        loadChildren: './animations/animations.module#AnimationsModule'
      }, 
      {
        path: 'forms',
        loadChildren: './components/forms/forms.module#FormsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
      }, {
        path: 'data-table',
        loadChildren: './components/tables/data-table/data-table.module#DataTableModule',
      }, {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
      }, {
        path: 'map',
        loadChildren: './map/map.module#MapModule',
      }, {
        path: 'maintenance/error',
        loadChildren: './maintenance/error/error.module#ErrorModule'
      }, {
        path: 'maintenance/coming-soon',
        loadChildren: './maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      }, {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      }, {
        path: 'email',
        loadChildren: './email/email.module#EmailModule'
      }, {
        path: 'crm-contact',
        loadChildren: './components/crm-contact/crm-contact.module#CrmContactModule'
      }, {
        path: 'task',
        loadChildren: './components/task/task.module#TaskModule'
      }, {
        path: 'editor',
        loadChildren: './components/editor/editor.module#EditorModule'
      }, {
        path: 'invoice',
        loadChildren: './components/invoice/invoice.module#InvoiceModule'
      }, {
        path: 'file-upload',
        loadChildren: './components/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
      }, {
        path: 'change-log',
        loadChildren: './change-log/change-log.module#ChangeLogModule'
      }, {
        path: 'simple-page',
        loadChildren: './simple-page/simple-page.module#SimplePageModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }, {
        path: 'maintenance/offline-ui',
        loadChildren: './maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
