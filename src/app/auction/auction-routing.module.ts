import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';

const routes: Routes = [
  {path: 'add-auction', component: AddAuctionPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
