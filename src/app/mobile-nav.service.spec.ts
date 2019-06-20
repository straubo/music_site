import { TestBed, inject } from '@angular/core/testing';

import { MobileNavService } from './mobile-nav.service';

describe('MobileNavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileNavService]
    });
  });

  it('should be created', inject([MobileNavService], (service: MobileNavService) => {
    expect(service).toBeTruthy();
  }));
});
