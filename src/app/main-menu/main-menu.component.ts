import { Component } from '@angular/core';

import { MenuItem } from './menu-item';


@Component({
  selector: 'ap-main-menu',
  templateUrl: './main-menu.component.html',
  styles: []
})
export class MainMenuComponent {

  isMenuShown = false;
  menuItems: MenuItem[] = [
    { link: '/auctions', title: 'Aukcje' },
    { link: '/promotions', title: 'Promocje' },
    { link: '/advices', title: 'Podpowiadamy' }
  ];

  toggleMenu(): void {
    this.isMenuShown = !this.isMenuShown;
  }
}
