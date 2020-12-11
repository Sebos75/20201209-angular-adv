import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdviceDetailComponent } from './advice-detail/advice-detail.component';
import { AdvicesPageComponent } from './advices-page/advices-page.component';

const routes: Routes = [
  {path: '', component: AdvicesPageComponent, children: [
    {path: '', component: AdviceDetailComponent},
    {path: 'article/:id', component: AdviceDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviceRoutingModule { }
