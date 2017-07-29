import { MenuItem } from './../menu-item/menu-item.model';
export class ItemCart{
    constructor(
        public menuItem : MenuItem,
        public quantity: number =1
    ){}
}