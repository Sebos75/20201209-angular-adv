import { Component, Input } from '@angular/core';

import { AuctionItem } from '../../../src/app/auction/auction-item';

@Component({
  selector: 'ap-auction-card',
  template: `
    <div class="card" *ngIf="auction">
      <div class="card-header">{{auction.title}}</div>
      <img class="card-img" [src]="auction.imgUrl" [alt]="auction.title" />
      <div class="card-body">
        <p class="card-text">{{auction.description}}</p>
        <div class="d-flex justify-content-between align-content-center">
          <strong> {{auction.price}} zł</strong>
          <button class="btn btn-primary">
            <fa-icon icon="cart-plus"></fa-icon>
          </button>
        </div>
      </div>
    </div>
  `
})
export class AuctionCardComponent {

  @Input() auction!: AuctionItem;

  constructor() {}
}
