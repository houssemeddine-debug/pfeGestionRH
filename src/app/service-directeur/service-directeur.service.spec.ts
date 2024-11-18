import { TestBed } from '@angular/core/testing';

import { ServiceDirecteurService } from './service-directeur.service';

describe('ServiceDirecteurService', () => {
  let service: ServiceDirecteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDirecteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
