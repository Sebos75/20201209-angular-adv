import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuctionItem } from '../auction-item';
import { AuctionsService } from '../auctions.service';

@Component({
  templateUrl: './add-auction-page.component.html',
  styles: [`
   .ng-touched.ng-invalid {
      border-color: darkred;
    }
  `]
})
export class AddAuctionPageComponent {

  imgID = 100;
  errorMessage = '';

  constructor(private auctionsService: AuctionsService) { }

  handleCleanError(): void {
    this.errorMessage = '';
  }

  handleFormSubmit(form: NgForm): void {
    console.dir(form);
    if (form.invalid) {
      this.errorMessage = 'Proszę popraw formularz !';
      form.control.markAllAsTouched();
      return;
    }
    const auction: AuctionItem = form.value as AuctionItem;
    auction.imgUrl = 'https://picsum.photos/id/' + auction.imgUrl + '/200/200';

    // Wrzuć aukcje na serwer:
    // auction

    this.auctionsService.add(auction).subscribe((/*auctionFormServer: AuctionItem*/) => {
      form.resetForm();
      this.imgID = 1;
      // console.log(auctionFormServer);
    });

    // Jeśli ok, to uruchom:
    // form.resetForm();
    // this.imgID = 1;
  }

}
