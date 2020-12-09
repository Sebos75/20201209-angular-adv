import { Component, OnInit } from '@angular/core';
import { AuctionItem } from '../auction-item';

@Component({
  templateUrl: './auctions-page.component.html',
  styles: [
  ]
})
export class AuctionsPageComponent implements OnInit {

  isLoading = false;
  auctionsLoadingError = '';
  auctions: AuctionItem[] = [
    {
      id: 10,
      imgUrl: 'https://picsum.photos/id/3/200/200',
      title: 'sample',
      price: 2000
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
