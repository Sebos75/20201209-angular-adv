import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {

  items: AuctionItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
