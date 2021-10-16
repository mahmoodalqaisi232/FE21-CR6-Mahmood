import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { TravelsComponent } from './travels/travels.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { OffersDetailsComponent } from './offers-details/offers-details.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ContentComponent,
    TravelsComponent,
    BlogComponent,
    FooterComponent,
    OffersDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
