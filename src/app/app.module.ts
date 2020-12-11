import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
  faUser,
  faSync,
  faEnvelope, faSignInAlt, faKey
} from '@fortawesome/free-solid-svg-icons';
// import { HighlightDirective } from './advice/highlight.directive';
import { AuctionModule } from './auction/auction.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { NgProgressModule } from 'ngx-progressbar';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainMenuComponent,
    // HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AuctionModule,
    SharedModule,
    HttpClientModule,
    NgProgressModule.withConfig({}),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
     }),
    AuthModule
  ],
  providers: [],
  // exports: [HighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faIconLibrary: FaIconLibrary) {
    // ? tslint disable line
    faIconLibrary.addIcons(
      faSync, faUser, faCartPlus, faShoppingBasket,
      faTag, faPlus, faEdit, faImage, faGavel, faEnvelope, faSignInAlt, faKey);
  }
}
