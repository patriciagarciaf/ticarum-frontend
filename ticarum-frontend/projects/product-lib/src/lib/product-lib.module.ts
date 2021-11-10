import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductitemComponent } from './productitem/productitem.component';



@NgModule({
  declarations: [
    ProductitemComponent,
    ProductdropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    ProductitemComponent,
    ProductdropdownComponent,
  ]
})
export class ProductLibModule { }
