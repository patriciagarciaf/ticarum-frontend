import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'projects/core-lib/src/public-api';
import { InvoiceSharedModule } from 'projects/invoice/src/app/app.module';
import { ProductSharedModule } from 'projects/product/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductSharedModule.forRoot(),
    CoreLibModule,
    InvoiceSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
