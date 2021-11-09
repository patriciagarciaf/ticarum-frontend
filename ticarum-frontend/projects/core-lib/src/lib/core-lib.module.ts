import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { TicButtonComponent } from './formcontrols/tic-button/tic-button.component';
import { TicInputComponent } from './formcontrols/tic-input/tic-input.component';



@NgModule({
  declarations: [
    CoreLibComponent,
    TicButtonComponent,
    TicInputComponent
  ],
  imports: [
  ],
  exports: [
    CoreLibComponent
  ]
})
export class CoreLibModule { 
  constructor(){}
}
