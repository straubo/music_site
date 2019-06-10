import { TestBed, inject } from '@angular/core/testing';

import { SongManagerService } from './song-manager.service';

describe('SongManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongManagerService]
    });
  });

  it('should be created', inject([SongManagerService], (service: SongManagerService) => {
    expect(service).toBeTruthy();
  }));
});
