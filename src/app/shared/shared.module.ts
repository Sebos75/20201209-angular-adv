import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HighlightDirective,
    FontAwesomeModule
  ]
})
export class SharedModule { }
