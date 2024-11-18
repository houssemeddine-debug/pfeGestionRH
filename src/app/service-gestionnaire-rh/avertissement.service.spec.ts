import { TestBed } from '@angular/core/testing';

import { AvertissementService } from './avertissement.service';

describe('AvertissementService', () => {
  let service: AvertissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvertissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
