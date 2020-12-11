import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  templateUrl: './promotions-page.component.html',
})
export class PromotionsPageComponent implements OnInit {

  promotedAuction: AuctionItem = {
      id: 4,
      title: 'Zabytkowe wozy',
      price: 11000,
      isPromoted: true,
      imgUrl: 'https://picsum.photos/id/133/200/200'
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(auction: AuctionItem): void {
    console.info('Dodaje ', auction, 'Do innego koszyka !');
  }
}
