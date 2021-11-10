import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './service/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'tic-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  oroduct: Product[] = new Array<Product>()
    private dispose: Subscription | null = null;

    constructor(private productService: ProductService){}

    ngOnDestroy(): void {
      this.dispose && this.dispose.unsubscribe();
    }

    ngOnInit(): void {
      this.dispose = this.productService.getAll().subscribe(data => this.oroduct = data);
    }
    handlerclick(ev:any){ 
    }

}
