import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceModule } from '../../projects/invoice/src/app/app.module';

const routes: Routes = [
  {path: 'invoice', loadChildren: () => import('../../projects/invoice/src/app/app.module').then(m=>m.InvoiceSharedModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  InvoiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
