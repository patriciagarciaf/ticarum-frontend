import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CoreLibModule } from 'projects/core-lib/src/public-api';
import { InvoiceComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductLibModule } from 'projects/product-lib/src/public-api';
import { RootRoutingModule, ChildRoutingModule } from 'projects/product/src/app/product-routing.module';

const providers: any[] = []

@NgModule({
  declarations: [
    InvoiceComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreLibModule,
    ProductLibModule,
  ],
  providers: providers,
  bootstrap: [InvoiceComponent]
})
export class InvoiceModule {
  constructor(){}
}

@NgModule({
  imports:[
    FormsModule,
    ChildRoutingModule,
  ]
})
export class InvoiceSharedModule {
  static forRoot(): ModuleWithProviders<InvoiceModule> {
    return {
      ngModule: InvoiceModule,
      providers: providers,
    }
  }
}