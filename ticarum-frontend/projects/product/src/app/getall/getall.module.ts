import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreLibModule } from 'projects/core-lib/src/public-api';
import { GetallComponent } from '../product-global/getall/getall.component';
import { ProductModule } from '../product.module';
import { GetAllRoutingModule } from './getall-routing.module';



@NgModule({
  declarations: [
    GetallComponent
  ],
  imports: [
    CommonModule,
    GetAllRoutingModule,
    CoreLibModule,
    HttpClientModule,
    ProductModule
  ]
})
export class GetallModule { }
