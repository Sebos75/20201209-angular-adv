import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceRoutingModule } from './advice-routing.module';
import { AdvicesPageComponent } from './advices-page/advices-page.component';
import { SharedModule } from '../shared/shared.module';
// import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AdvicesPageComponent,
    // HighlightDirective
  ],
  imports: [
    CommonModule,
    AdviceRoutingModule,
    SharedModule
  ],
  // exports: [HighlightDirective]
})
export class AdviceModule { }
