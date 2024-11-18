import { TestBed } from '@angular/core/testing';

import { AssiduiteService } from './assiduite.service';

describe('AssiduiteService', () => {
  let service: AssiduiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssiduiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
