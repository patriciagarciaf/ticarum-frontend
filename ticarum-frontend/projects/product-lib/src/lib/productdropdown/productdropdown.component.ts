import { Component, OnInit } from '@angular/core';
import { Product } from 'projects/product/src/app/service/product';
import { Subscription } from 'rxjs';
import { Actions } from '../services/actions';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productdropdown',
  templateUrl: './productdropdown.component.html',
  styleUrls: ['./productdropdown.component.css']
})
export class ProductdropdownComponent implements OnInit {

  products: Product[] = new Array<Product>();
  selectedproducts: Product[] = new Array<Product>();
  default: any;

  private dispose: Subscription | null = null;

  constructor(private productService: ProductService) { }

  ngOnDestroy(): void {
    this.dispose && this.dispose.unsubscribe();
  }

  ngOnInit(): void {
    this.dispose = this.productService.getAll().subscribe(data => this.products = data);
  }
  addproduct(product: Product) {
    if (!this.selectedproducts.includes(product)) {
      let index = this.products.findIndex((element) => element === product);
      this.products.splice(index, 1);
      this.selectedproducts.push(product);
    }
  }
  removeproduct(event: Event) {
    const nodes = event.composedPath() as HTMLElement[];
    const dataSet = nodes.filter(n => n.dataset && n.dataset.action).map(n => n.dataset)
    const { id, action } = dataSet[0] || {};
    if (action === Actions.remove.toString()) {
      const product = this.selectedproducts.find(element => id === element.id);
      if (product) {
        this.products.push(product);
        this.selectedproducts.splice(this.selectedproducts.indexOf(product), 1);
      }
    }
  }
}