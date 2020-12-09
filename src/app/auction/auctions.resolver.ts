import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { NgProgressRef, NgProgress } from 'ngx-progressbar';
import { ToastrService } from 'ngx-toastr';

import { Observable, EMPTY, of } from 'rxjs';

import { tap, catchError, finalize, retry } from 'rxjs/operators';

import { AuctionItem } from './auction-item';
import { AuctionsService } from './auctions.service';

@Injectable({
  providedIn: 'root'
})
export class AuctionsResolver implements Resolve<AuctionItem[]> {

  private progressRef: NgProgressRef;

  constructor(private auctionsService: AuctionsService, private toastrService: ToastrService, private progress: NgProgress) {
    this.progressRef = progress.ref();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AuctionItem[]> {
    // Wyświetl ładowanie
    this.progressRef.start();
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
      }),
      finalize(() => {
        // Tu zrobimy schowanie ładowania
        this.progressRef.complete();
      })
    );
  }
}
