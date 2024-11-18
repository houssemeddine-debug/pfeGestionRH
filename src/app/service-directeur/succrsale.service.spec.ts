import { TestBed } from '@angular/core/testing';

import { SuccrsaleService } from './succrsale.service';

describe('SuccrsaleService', () => {
  let service: SuccrsaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccrsaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
