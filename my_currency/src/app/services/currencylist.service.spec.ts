import { TestBed } from '@angular/core/testing';

import { CurrencylistService } from './currencylist.service';

describe('CurrencylistService', () => {
  let service: CurrencylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
