import { RestauranteService } from './../../restaurantes/restaurante.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from './../menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menusItens: Observable<MenuItem>

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestauranteService
  ) { }

  ngOnInit() {
    this.menusItens = this.restaurantService.menu(this.activatedRoute.parent.snapshot.params['id'])
  }

  add(menuItem : MenuItem){
    console.log(menuItem)
  }

}
