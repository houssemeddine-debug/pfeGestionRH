import { TestBed } from '@angular/core/testing';

import { DirecteurRHService } from './directeur-rh.service';

describe('DirecteurRHService', () => {
  let service: DirecteurRHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirecteurRHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
