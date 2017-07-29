import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { RestauranteService } from './restaurantes/restaurante.service';
import { routes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http'
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { RatingsComponent } from './restaurant-detail/ratings/ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    RatingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestauranteService, ShoppingCartService , {provide: LOCALE_ID ,useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
