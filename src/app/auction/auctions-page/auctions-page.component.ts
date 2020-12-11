import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuctionItem } from '../auction-item';
import { CartService } from '../cart.service';

@Component({
  templateUrl: './auctions-page.component.html',
  providers: [
    // Jeśli tutaj dostarczysz service,
    // to będzie on dostępny dla tego komponentu i jego potomków
  ]
})
export class AuctionsPageComponent implements OnInit {


  auctionSub!: Subscription;
  isLoading = false;
  auctionsLoadingError = '';
  auctions: AuctionItem[] = [];

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.auctions = data.auctions;
    });
  }

  handleAddToCart(auction: AuctionItem): void {
    this.cartService.add(auction);
  }

}
