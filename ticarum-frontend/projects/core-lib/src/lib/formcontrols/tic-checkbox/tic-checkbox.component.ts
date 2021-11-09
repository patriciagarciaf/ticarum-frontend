import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-tic-checkbox',
  templateUrl: './tic-checkbox.component.html',
  styleUrls: ['./tic-checkbox.component.css']
})
export class TicCheckboxComponent{

  @Input() text: string ='';
  @Input() disabled = false;

  isChecked = false;

  writeValue(obj: boolean): void {
    this.isChecked = obj;
  }
}
