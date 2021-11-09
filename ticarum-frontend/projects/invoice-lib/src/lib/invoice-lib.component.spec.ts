import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceLibComponent } from './invoice-lib.component';

describe('InvoiceLibComponent', () => {
  let component: InvoiceLibComponent;
  let fixture: ComponentFixture<InvoiceLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
