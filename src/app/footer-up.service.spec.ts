import { TestBed, inject } from '@angular/core/testing';

import { FooterUpService } from './footer-up.service';

describe('FooterUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterUpService]
    });
  });

  it('should be created', inject([FooterUpService], (service: FooterUpService) => {
    expect(service).toBeTruthy();
  }));
});
