import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {

  progressRef: NgProgressRef;
  requestsQueue = new Set<HttpRequest<unknown>>();

  constructor(private progress: NgProgress) {
    this.progressRef = this.progress.ref();
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.requestsQueue.size === 0) {
      // wystartuj progress tylko jeśli kolejka pusta...!!
      this.progressRef.start();
    }
    this.requestsQueue.add(request);
    return next.handle(request).pipe(
      finalize(() => {
        // Wyrzuć request z kolejki (korzystamy z tej samej referencji bo jesteśmy w closure)
        this.requestsQueue.delete(request);
        if (this.requestsQueue.size === 0) {
          // jeśli kolejka pusta - to schowaj progress bar.
          this.progressRef.complete();
        }
      })
    );
  }
}
