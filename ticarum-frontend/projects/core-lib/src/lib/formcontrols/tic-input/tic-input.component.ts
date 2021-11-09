import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'lib-tic-input',
  templateUrl: './tic-input.component.html',
  styleUrls: ['./tic-input.component.css']
})
export class TicInputComponent{

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'text' | 'password' = 'text';
  @Input() formGroup:FormGroup|any;
  @Input() name:string|any
 
  private get control(): FormControl | any{
    return this.formGroup && this.formGroup.get(this.name)
  }
  get errors(): ValidationErrors | null{
    return  this.control?.errors
  }
  get dirty(): boolean{
    return this.control?.dirty
  }
}
