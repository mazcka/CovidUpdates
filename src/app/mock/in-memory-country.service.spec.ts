import { TestBed } from '@angular/core/testing';

import { InMemoryCountryService } from './in-memory-country.service';

describe('InMemoryCountryService', () => {
  let service: InMemoryCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
