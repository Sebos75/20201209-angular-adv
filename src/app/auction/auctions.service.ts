import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuctionItem } from './auction-item';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  // to będzie: Stateless service

  private backendURL = environment.baseURL + 'auctions';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AuctionItem[]> {
    return this.httpClient.get<AuctionItem[]>(this.backendURL);
  }

  add(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpClient.post<AuctionItem>(this.backendURL, auction);
  }
}
