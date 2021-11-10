import { Component, OnInit } from '@angular/core';
import { Actions } from 'projects/product-lib/src/lib/services/actions';
import { Product } from 'projects/product-lib/src/lib/services/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  products: Product[] = new Array<Product>()
  private dispose: Subscription | null = null;
  selected: Actions = Actions.selected
  selectedProducts: Product[] = new Array <Product>()

  constructor(private productService: ProductService){}

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.productService.getAll().subscribe(data => this.products = data);
  }
  handlerclick(event:any){ 
    if(event) {
       this.selectedProducts.push()//TODO llenar lista
       console.log(this.selectedProducts)
    }
  }

}
