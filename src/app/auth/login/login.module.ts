import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import {LoginRoutingModule} from './login-routing.module';
import { LoginComponent } from './login.component';

// Para consumir APIs via HTTP
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    FormsModule, // Para consumir APIs via HTTP
    HttpModule // Para consumir APIs via HTTP
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
