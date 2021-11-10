import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productglobal',
  templateUrl: './product-global.component.html',
  styleUrls: ['./product-global.component.css']
})
export class ProductGlobalComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

}
