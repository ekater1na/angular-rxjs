import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ConvertToSpacesPipe
  ],
  declarations: [
    ConvertToSpacesPipe
  ]
})
export class SharedModule { }
