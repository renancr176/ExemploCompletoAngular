import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoSanitizePipe } from '../pipes/no-sanitize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NoSanitizePipe
  ],
  exports: [
    NoSanitizePipe
  ]
})
export class PipesModule { }
