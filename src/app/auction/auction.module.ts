import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddAuctionPageComponent,
    AuctionsPageComponent,
    CartPageComponent,
    PromotionsPageComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    SharedModule
  ]
})
export class AuctionModule { }
