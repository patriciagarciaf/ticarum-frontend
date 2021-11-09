import { TestBed } from '@angular/core/testing';

import { InvoiceLibService } from './invoice-lib.service';

describe('InvoiceLibService', () => {
  let service: InvoiceLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
