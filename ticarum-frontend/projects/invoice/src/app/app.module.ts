import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { CoreLibComponent, CoreLibModule } from 'projects/core-lib/src/public-api';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const providers: any[] = []

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreLibModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }

 @NgModule({})
 export class InvoiceSharedModule {
   static forRoot(): ModuleWithProviders {
     return {
       ngModule: AppModule,
       providers: providers,
     }
   }
 }