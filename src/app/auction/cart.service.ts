import { Injectable } from '@angular/core';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: AuctionItem[] = [];

  constructor() { }

  add(auction: AuctionItem): void {
    this.items.push(auction);
  }

  getAll(): AuctionItem[] {
    return this.items;
  }
}
