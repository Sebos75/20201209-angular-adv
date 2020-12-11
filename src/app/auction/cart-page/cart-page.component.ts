import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuctionItem } from '../auction-item';
import { CartService } from '../cart.service';

@Component({
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {

  item$: Observable<AuctionItem[]> = of([]);

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.item$ = this.cartService.getAll();
  }

}
