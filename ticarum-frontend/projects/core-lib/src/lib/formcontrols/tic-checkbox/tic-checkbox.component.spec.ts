import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicCheckboxComponent } from './tic-checkbox.component';

describe('TicCheckboxComponent', () => {
  let component: TicCheckboxComponent;
  let fixture: ComponentFixture<TicCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
