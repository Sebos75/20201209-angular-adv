import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';

const routes: Routes = [
  {path: 'add-auction', component: AddAuctionPageComponent},
  {path: 'shopping-cart', component: CartPageComponent},
  {path: 'auctions', component: AuctionsPageComponent},
  {path: 'auctions/45', component: AuctionsPageComponent},
  {path: 'auctions/:id', component: AuctionsPageComponent},
  {path: 'promotions', component: PromotionsPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionRoutingModule { }
