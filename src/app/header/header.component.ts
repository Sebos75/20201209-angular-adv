import { Component } from '@angular/core';

@Component({
  selector: 'ap-header',
  template: `
    <header class="jumbotron">
      <h1><fa-icon icon="gavel"></fa-icon> {{title}}</h1>
    </header>
  `,
  styles: [`
    header {
      background: url('https://picsum.photos/id/180/2000/400') center no-repeat;
    }

    h1 {
      color: white;
      text-shadow: black 2px 2px 2px;
    }
  `]
})
export class HeaderComponent {
  title = 'Auction Portal';
}
