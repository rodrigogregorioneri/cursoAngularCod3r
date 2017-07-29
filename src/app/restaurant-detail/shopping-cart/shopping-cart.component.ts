import { ItemCart } from './item-cart.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {



  constructor(private shoppingCartService: ShoppingCartService) {
  }

  total(){
    return this.shoppingCartService.total()
  }

  item() {
    return this.shoppingCartService.itensCart
  }

  removeItem(item) {
    this.shoppingCartService.remove(item)
  }

  limpar(){
    this.shoppingCartService.clear()
  }
  
  addItem(item) {
    this.shoppingCartService.addItemCart(item)
  }

  ngOnInit() {
  }

}
