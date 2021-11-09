import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetallComponent } from './product-global/getall/getall.component';
import { FormComponent } from './product-global/form/form.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const providers: any[] = [];

@NgModule({
  declarations: [
    AppComponent,
    GetallComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

export class ProductSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}