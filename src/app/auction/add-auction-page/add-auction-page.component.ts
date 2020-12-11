import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';
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

  myTitle = new FormControl('', [Validators.required, this.forbiddenTitleValidator(/aukcja/g)]);
  myPrice = new FormControl(0, [Validators.required, Validators.min(10), Validators.max(2000)]);
  auctionForm = new FormGroup({
    title: this.myTitle,
    price: this.myPrice,
    imgUrl: new FormControl(1, []),
    description: new FormControl('', []),
    tags: new FormArray([])
  }, []);

  constructor(private auctionsService: AuctionsService) { }

  handleCleanError(): void {
    this.errorMessage = '';
  }

  get fromTags(): FormArray {
    return this.auctionForm.get('tags') as FormArray;
  }

  forbiddenTitleValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      // console.log(control);
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

  handleAddTag(): void {
    this.fromTags.push(new FormControl(''));
  }

  handleFormSubmit(): void {
    const form = this.auctionForm;
    console.dir(form);
    if (form.invalid) {
      this.errorMessage = 'Proszę popraw formularz !';
      form.markAllAsTouched();
      return;
    }
    const auction: AuctionItem = form.value as AuctionItem;
    auction.imgUrl = 'https://picsum.photos/id/' + auction.imgUrl + '/200/200';

    // Wrzuć aukcje na serwer:
    // auction

    this.auctionsService.add(auction).subscribe((/*auctionFormServer: AuctionItem*/) => {
      form.reset(
        {imgUrl: 1}
      );
      // this.imgID = 1;
      // console.log(auctionFormServer);
    });

    // Jeśli ok, to uruchom:
    // form.resetForm();
    // this.imgID = 1;
  }

}
