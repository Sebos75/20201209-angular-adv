import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuctionItem } from './auction-item';
import { AuctionsService } from './auctions.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionsResolver implements Resolve<AuctionItem[]> {

  constructor(private auctionsService: AuctionsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AuctionItem[]> {
    return this.auctionsService.getAll();
  }
}
