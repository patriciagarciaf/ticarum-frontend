import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicInputComponent } from './tic-input.component';

describe('TicInputComponent', () => {
  let component: TicInputComponent;
  let fixture: ComponentFixture<TicInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
