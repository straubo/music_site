import { TestBed, inject } from '@angular/core/testing';

import { RaindropService } from './raindrop.service';

describe('RaindropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaindropService]
    });
  });

  it('should be created', inject([RaindropService], (service: RaindropService) => {
    expect(service).toBeTruthy();
  }));
});
