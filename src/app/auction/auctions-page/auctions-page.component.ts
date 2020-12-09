import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';

@Component({
  templateUrl: './auctions-page.component.html',
  styles: [
  ],
  providers: [
    // Jeśli tutaj dostarczysz service,
    // to będzie on dostępny dla tego komponentu i jego potomków
  ]
})
export class AuctionsPageComponent implements OnInit, OnDestroy {

  auctionSub!: Subscription;
  isLoading = false;
  auctionsLoadingError = '';
  auctions: AuctionItem[] = [
    //   {
    //     id: 10,
    //     imgUrl: 'https://picsum.photos/id/3/200/200',
    //     title: 'sample',
    //     price: 2000
    //   }
  ];

  // private pomidor: AuctionsService;

  // constructor(pomidor: AuctionsService) {
  //   this.pomidor = pomidor;
  //  }

  constructor(private auctionsService: AuctionsService) { }

  ngOnDestroy(): void {
    this.auctionSub.unsubscribe();
  }

  ngOnInit(): void {
    // console.log('');
    this.isLoading = true;
    this.auctionSub = this.auctionsService.getAll().subscribe(
      (auctions: AuctionItem[]) => {
        this.auctions = auctions;
      },
      (err: HttpErrorResponse) => {
        this.auctionsLoadingError = err.message;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );

    // Wariant 2 użycie PartialObserver<AuctionItem[]>
    // this.auctionsService.getAll().subscribe(
    //   {
    //     next: (auctions: AuctionItem[]) => {
    //       this.auctions = auctions;
    //     },
    //     error: (err: HttpErrorResponse) => {
    //       this.auctionsLoadingError = err.message;
    //       this.isLoading = false;
    //     },
    //     complete: () => {
    //       this.isLoading = false;
    //     }
    //   }
    // );

  }

}
