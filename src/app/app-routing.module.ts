import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path: '', redirectTo: '/auctions', pathMatch: 'full'},
  {path: 'advices', loadChildren: () => import('./advice/advice.module').then(m => m.AdviceModule) },
  // Wildcard ale nie chcesz tego tutaj montować !
  // {path: '**', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
