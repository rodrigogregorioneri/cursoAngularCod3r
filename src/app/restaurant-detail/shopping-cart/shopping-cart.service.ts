import { MenuItem } from './../menu-item/menu-item.model';
import { ItemCart } from './item-cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

  itensCart: ItemCart[] = []

  constructor() { }

  clear() {
    this.itensCart = []
  }

  addItemCart(menuItem: MenuItem) {
    const find = this.itensCart.find(i => i.menuItem.id === menuItem.id)
    if (find) {
      find.quantity = find.quantity + 1
    } else {
      this.itensCart.push(new ItemCart(menuItem))
    }
  }

  remove(itemCart: ItemCart) {
    this.itensCart.splice(this.itensCart.indexOf(itemCart), 1)
  }


  total() : number{
    return this.itensCart
      .map(itemCart => itemCart.menuItem.price * itemCart.quantity)
      .reduce((p, c) => p + c, 0)
  }

}
