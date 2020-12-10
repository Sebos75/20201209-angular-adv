import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../auth/user.service';

import { MenuItem } from './menu-item';


@Component({
  selector: 'ap-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  isMenuShown = false;
  menuItems: MenuItem[] = [
    { link: '/auctions', title: 'Aukcje' },
    { link: '/promotions', title: 'Promocje' },
    { link: '/advices', title: 'Podpowiadamy' }
  ];
  loginSub!: Subscription;

  constructor(private userService: UserService){}

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }

  ngOnInit(): void {
    this.loginSub = this.userService.isLoggedIn$().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  toggleMenu(): void {
    this.isMenuShown = !this.isMenuShown;
  }
}
