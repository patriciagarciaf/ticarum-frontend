import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-tic-button',
  templateUrl: './tic-button.component.html',
  styleUrls: ['./tic-button.component.css']
})
export class TicButtonComponent implements OnInit {
  @Input() buttonConfig: any;
  @Input() text: string = '';
  @Output() btnClickEmt: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick() {
    this.btnClickEmt.emit();
  }

}
