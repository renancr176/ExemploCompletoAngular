import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FormularioComponent } from './formulario.component';
import { FormularioRountingModule } from './formulario-rounting-module';

//#region Flat-Able Components
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
//#endregion

//#region SubComponents
import { BasicoComponent } from './basico/basico.component';
import { EnvolvidosComponent } from './envolvidos/envolvidos.component';
import { PeriodoCronogramaComponent } from './periodo-cronograma/periodo-cronograma.component';
import { TrajetoCustosComponent } from './trajeto-custos/trajeto-custos.component';
//#endregion

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormularioRountingModule,
    TextMaskModule,
    FormsModule, // Para consumir APIs via HTTP
    HttpModule // Para consumir APIs via HTTP
    ,PipesModule
  ],
  declarations: [
    FormularioComponent, 
    BasicoComponent, 
    EnvolvidosComponent,
    PeriodoCronogramaComponent, 
    TrajetoCustosComponent
  ]
})
export class FormularioModule { }
