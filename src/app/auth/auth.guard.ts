import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // this.router.navigate(['login']);

    return this.userService.isLoggedIn$().pipe(
      tap((isLoggedIn) => {
        // SIDE EFFECT (robimy go przez tap)
        // Decyzja: jeśli użytkownik po uruchomieniu canActivate, nie jest zalogowany,
        // To przenieś go na /login
        // console.log(isLoggedIn);
        if (!isLoggedIn) {
          this.router.navigate(['login']);
        }
      })
    );
  }

}
