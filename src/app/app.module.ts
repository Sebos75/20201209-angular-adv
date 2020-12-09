import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCartPlus,
  faEdit,
  faGavel,
  faImage,
  faPlus,
  faShoppingBasket, faTag,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { HighlightDirective } from './highlight.directive';
import { AdviceModule } from './advice/advice.module';
import { AuctionModule } from './auction/auction.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AdviceModule,
    AuctionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faUser, faCartPlus, faShoppingBasket, faTag, faPlus, faEdit, faImage, faGavel);
  }
}
