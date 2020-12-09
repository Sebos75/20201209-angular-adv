import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AddAuctionPageComponent } from './add-auction-page/add-auction-page.component';
import { AuctionsPageComponent } from './auctions-page/auctions-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { PromotionsPageComponent } from './promotions-page/promotions-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuctionCardComponent } from './auction-card/auction-card.component';


@NgModule({
  declarations: [
    AddAuctionPageComponent,
    AuctionsPageComponent,
    CartPageComponent,
    PromotionsPageComponent,
    AuctionCardComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    SharedModule
  ],
  providers: [
    // AuctionService
  ]
})
export class AuctionModule { }
