import { Component, Input } from '@angular/core';
import { Actions } from '../services/actions';
import { Product } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'lib-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent{

  @Input() product: Product | any
  selected: Actions = Actions.selected

  constructor(private ProductService: ProductService) { }

  get productText(){
    const {description, priceWithoutIVA} = this.product;
    return `${description}(${priceWithoutIVA})`;
}
}
