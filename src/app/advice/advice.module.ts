import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceRoutingModule } from './advice-routing.module';
import { AdvicesPageComponent } from './advices-page/advices-page.component';


@NgModule({
  declarations: [
    AdvicesPageComponent
  ],
  imports: [
    CommonModule,
    AdviceRoutingModule
  ]
})
export class AdviceModule { }
