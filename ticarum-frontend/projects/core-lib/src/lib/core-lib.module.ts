import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { TicButtonComponent } from './formcontrols/tic-button/tic-button.component';
import { TicInputComponent } from './formcontrols/tic-input/tic-input.component';
import { TicCheckboxComponent } from './formcontrols/tic-checkbox/tic-checkbox.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CoreLibComponent,
    TicButtonComponent,
    TicInputComponent,
    TicCheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TicButtonComponent,
    TicInputComponent,
    TicCheckboxComponent
  ]
})
export class CoreLibModule { 
  constructor(){}
}
