import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdropdownComponent } from './productdropdown.component';

describe('ProductdropdownComponent', () => {
  let component: ProductdropdownComponent;
  let fixture: ComponentFixture<ProductdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
