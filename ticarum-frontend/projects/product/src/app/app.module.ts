import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GetallComponent } from './product-global/getall/getall.component';
import { FormComponent } from './product-global/form/form.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ProductBaseComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreLibModule } from 'projects/core-lib/src/public-api';

const providers: any[] = [];

@NgModule({
  declarations: [
    ProductBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreLibModule
  ],
  providers: providers,
  bootstrap: [ProductBaseComponent]
})
export class ProductBaseModule { }

export class ProductSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductBaseModule,
      providers: providers
    }
  }
}