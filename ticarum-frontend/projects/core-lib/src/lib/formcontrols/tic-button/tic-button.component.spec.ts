import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicButtonComponent } from './tic-button.component';

describe('TicButtonComponent', () => {
  let component: TicButtonComponent;
  let fixture: ComponentFixture<TicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
