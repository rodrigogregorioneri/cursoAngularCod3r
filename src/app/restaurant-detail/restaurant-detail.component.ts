import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from './../restaurantes/restaurante/restaurante.model';
import { RestauranteService } from './../restaurantes/restaurante.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurante

  constructor(
    private activateRoute: ActivatedRoute,
    private restaurantService: RestauranteService
  ) { }

  ngOnInit() {
    this.restaurantService
      .find(this.activateRoute.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant=restaurant)
  }

}
