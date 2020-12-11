import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-cart-item',
  template: `
  <li class="list-group-item d-flex" style="height: 120px;">
    <img [src]="item.imgUrl" [alt]="item.title" style="max-width: 120px;" class="img-fluid mr-4">
    <div class="w-100">
      <h5 class="mb-1">{{item.title}}</h5>
      <small>{{item.price}}</small>
      <p>{{item.description}}</p>
    </div>
  </li>
  `

})
export class CartItemComponent {
  @Input() item!: AuctionItem;
}
