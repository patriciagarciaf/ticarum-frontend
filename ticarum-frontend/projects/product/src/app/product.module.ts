import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CoreLibModule } from "projects/core-lib/src/public-api";
import { ProductService } from "projects/product-lib/src/lib/services/product.service";
import { ProductLibModule } from "projects/product-lib/src/public-api";
import { GetallComponent } from "./getall/getall.component";
import { ProductGlobalComponent } from "./product-global/product-global.component";
import { RootRoutingModule, ChildRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";


@NgModule({
  declarations: [	
    ProductComponent,
    GetallComponent,
    ProductGlobalComponent,
   ],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    HttpClientModule,
    CoreLibModule,
    ProductLibModule,
    
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class ProductModule { 
  constructor(){}
}

@NgModule({
  imports: [
    ChildRoutingModule,
    ReactiveFormsModule,
    CoreLibModule,
    HttpClientModule,
  ],
  providers: [ProductService]


})
export class ProductSharedModule {
  static forRoot(): ModuleWithProviders<ProductModule> {
    return {
      ngModule: ProductModule,
      providers: [],
    }
  }
}