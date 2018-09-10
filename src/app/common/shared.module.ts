import { MaritalStatusPipe } from './../pipes/marital-status.pipe';
import { FullGenderPipe } from './../pipes/full-gender.pipe';
import { StatusTransformPipe } from './../pipes/status-transform.pipe';
import { SortPipe } from './../pipes/sort.pipe';
import { ShortenPipe } from './../pipes/shorten.pipe';
import { FuppercasePipe } from './../pipes/fuppercase.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FuppercasePipe,
    ShortenPipe,
    SortPipe,
    StatusTransformPipe,
    FullGenderPipe,
    MaritalStatusPipe
  ],
  exports: [
    FuppercasePipe,
    ShortenPipe,
    SortPipe,
    StatusTransformPipe,
    FullGenderPipe,
    MaritalStatusPipe
  ]
})
export class SharedModule { }
