import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../auction/cart.service';
import { UserService } from '../auth/user.service';

import { MenuItem } from './menu-item';


@Component({
  selector: 'ap-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent implements OnInit {

  // isLoggedIn = false;
  isMenuShown = false;
  menuItems: MenuItem[] = [
    { link: '/auctions', title: 'Aukcje' },
    { link: '/promotions', title: 'Promocje' },
    { link: '/advices', title: 'Podpowiadamy' }
  ];
  // loginSub!: Subscription; // async pipe załatwia sprawę
  isLoggedIn$!: Observable<boolean>;

  constructor(private userService: UserService, public cs: CartService){}

  ngOnInit(): void {
    // this.loginSub = this.userService.isLoggedIn$().subscribe((loggedIn: boolean) => {
    //   this.isLoggedIn = loggedIn;
    // });
    this.isLoggedIn$ = this.userService.isLoggedIn$();
  }

  toggleMenu(): void {
    this.isMenuShown = !this.isMenuShown;
  }
}
