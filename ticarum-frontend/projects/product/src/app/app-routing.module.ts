import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductBaseComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: ProductBaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

