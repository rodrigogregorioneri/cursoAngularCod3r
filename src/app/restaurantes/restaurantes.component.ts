import { RestauranteService } from './restaurante.service';
import { Restaurante } from './restaurante/restaurante.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes: any = [];

  constructor(private restauresService: RestauranteService) { }

  ngOnInit() {
    this.restauresService.list()
      .subscribe(restaurates => {
        this.restaurantes = restaurates
      })
  }

}
