import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Invoice } from '../invoiceinterface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() submit = new EventEmitter<Invoice>();

  formGroup: FormGroup = new FormGroup({
    NIF: new FormControl('', Validators.required),
    products: new FormControl('', Validators.required)
  });

  onSubmit(event: Event){
    event.stopPropagation();
    event.preventDefault();
    if(this.formGroup.valid){
      this.submit.emit(this.formGroup.value);
    }
  }
}
