import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { ProductitemComponent } from "./productitem/productitem.component";

@NgModule({
    declarations: [
      ProductitemComponent,
      ProductComponent
  
    ],
    exports: [
      ProductitemComponent,
      ProductComponent
    ],
    imports: [
      CommonModule,
    ]
  })
  export class ProductModule { 
    constructor() {
  
    }
  }