import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceRoutingModule } from './advice-routing.module';
import { AdvicesPageComponent } from './advices-page/advices-page.component';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../auth/user.service';
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
  providers: [
    // Prywatna (nowa) instancja serwisu:
    // UserService
  ]
  // exports: [HighlightDirective]
})
export class AdviceModule { }
