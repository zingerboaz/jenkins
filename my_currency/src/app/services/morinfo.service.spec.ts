import { TestBed } from '@angular/core/testing';

import { MorinfoService } from './morinfo.service';

describe('MorinfoService', () => {
  let service: MorinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
