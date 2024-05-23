import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleCarouselComponent } from './multiple-carousel/multiple-carousel.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingCardComponent } from './booking-card/booking-card.component';
import { BrandingCarouselComponent } from './branding-carousel/branding-carousel.component';
import { SpecialitiesCarouselComponent } from './specialities-carousel/specialities-carousel.component';
import { OffersCardComponent } from './offers-card/offers-card.component';

import { SwipeDirective } from './swipe.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlackCarouselComponent } from './slack-carousel/slack-carousel.component';
import { OffersCarouselComponent } from './offers-carousel/offers-carousel.component';
import { AutocompleteSearchComponent } from './autocomplete-search/autocomplete-search.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { CollapseFooterComponent } from './collapse-footer/collapse-footer.component';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    MultipleCarouselComponent,
    StarRatingComponent,

    NavbarComponent,
    BookingCardComponent,
    BrandingCarouselComponent,
    SpecialitiesCarouselComponent,
    OffersCardComponent,
    SwipeDirective,
    SlackCarouselComponent,
    OffersCarouselComponent,
    AutocompleteSearchComponent,
    FooterComponent,
    TitleComponent,
    CollapseFooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    SlickCarouselModule,
    MatIconModule,
    CarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
  HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
