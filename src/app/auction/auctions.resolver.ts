import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Observable, EMPTY } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';

import { AuctionItem } from './auction-item';
import { AuctionsService } from './auctions.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionsResolver implements Resolve<AuctionItem[]> {

  // ładowanie przeniesione do interceptora "progress.interceptor"...
  // private progressRef: NgProgressRef;

  constructor(private auctionsService: AuctionsService, private toastrService: ToastrService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AuctionItem[]> {
    return this.auctionsService.getAll().pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        // console.log(err);
        // Tu robimy obsługę błędu
        //
        // return of([
        //   // Mówię do TS "trust me I know what I'm doing"
        //   {title: 'troll'} as AuctionItem
        // ]);
        this.toastrService.error(err.message);
        return EMPTY;
      })
    );
  }
}
