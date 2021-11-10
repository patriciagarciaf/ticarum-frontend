import { Component, Input } from '@angular/core';
import { Actions } from 'projects/product-lib/src/lib/services/actions';
import { Product } from '../service/product';

@Component({
  selector: 'tic-product-item',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent{

  @Input() product: Product | any
    selected: Actions = Actions.selected

    get productText(){
        const {name, price} = this.product;
        return `${name}(${price})`;
    }

}
