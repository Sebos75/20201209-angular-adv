import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // []-------[A]-----[A,A]--------------------[A,A,A]

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
}
