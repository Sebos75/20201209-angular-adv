import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private token = '';

  constructor(private userService: UserService) {
    userService.getToken$().subscribe((token: string) => {
      this.token = token;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request);

    const authorizedRequest = request.clone({
      headers: request.headers.set('authorization', this.token)
    });
    return next.handle(authorizedRequest).pipe(
      tap((ev: HttpEvent<any>) => {
        console.log('http-ev', ev);
        // jeśli REQ zrobi 401 lub 403 to wyloguj użytkownika
        // Jaki jest error + przygotowujemy
        // this.userService.logOut();
        // this.userService.refreshToken();
      }),
      // catchError(() => {
      //   //
      //   return this.userService.refreshToken();
      // })
    );
  }
}
