import { TestBed } from '@angular/core/testing';

import { DatdService } from './datd.service';

describe('DatdService', () => {
  let service: DatdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
