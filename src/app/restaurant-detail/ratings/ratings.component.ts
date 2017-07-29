import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurante } from './../../restaurantes/restaurante/restaurante.model';
import { RestauranteService } from './../../restaurantes/restaurante.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-ratings',
  templateUrl: './ratings.component.html'
})
export class RatingsComponent implements OnInit {

  review: Observable<any>

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestauranteService
  ) { }

  ngOnInit() {
    this.review = this.restaurantService.reviews(this.activatedRoute.parent.snapshot.params['id'])
  }

}
