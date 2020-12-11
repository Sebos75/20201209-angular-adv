import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // []-------[A]-----[A,A]--------------------[A,A,A]
  // |
  // |           map([] => [].length)
  //  \        \       \
  //   0--------1-------2-----------------------3

  // private items: AuctionItem[] = [];

  private itemSubject = new BehaviorSubject<AuctionItem[]>([]);
  private item$: Observable<AuctionItem[]> = this.itemSubject.asObservable();

  add(auction: AuctionItem): void {
    // const auctions = this.itemSubject.getValue();
    const auctions = [...this.itemSubject.getValue()];
    // []-------

    auctions.push(auction); // MUSISZ PAMIĘTAĆ TERAZ o rozgłoszeniu zmian;
    // [A]

    // Dopóki pamiętasz o tym, to jest ok:
    this.itemSubject.next(auctions);
    // []-------[A]
  }

  getAll(): Observable<AuctionItem[]> {
    return this.item$;
  }

  countAll(): Observable<number> {
    // this.items.length //? 10
    return this.item$.pipe(map((auctions: AuctionItem[]) => auctions.length));
  }

  getCartValue(): Observable<number> {

    // []-------[A]-----[A,A]--------------------[A,A,A]

    //          [A -> price]

    //          [P] ---- [P, P].sum()
    const sum = (accumulator: number, value: number): number => accumulator + value;
    const pluckPrice = (auction: AuctionItem): number => auction.price;

    return this.item$.pipe(map((auctions: AuctionItem[]) => auctions.map(pluckPrice).reduce(sum, 0)));
    // return of(2000);
  }
}

// const sum = (a: number, b: number): number => a + b;
// const pluckPrice = (auction: AuctionItem): number => auction.price;

// const auctions: AuctionItem[] = [
//   {title: '', price: 1} as AuctionItem,
//   {title: '', price: 2} as AuctionItem,
//   {title: '', price: 90} as AuctionItem,
//   {title: '', price: 2000} as AuctionItem,
// ];

// auctions; // ?
// auctions.map(pluckPrice); // ?
// auctions.map(pluckPrice).reduce(sum); // ?

