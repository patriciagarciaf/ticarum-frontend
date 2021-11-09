import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGlobalComponent } from './product-global.component';

describe('ProductGlobalComponent', () => {
  let component: ProductGlobalComponent;
  let fixture: ComponentFixture<ProductGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
