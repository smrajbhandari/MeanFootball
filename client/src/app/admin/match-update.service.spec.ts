import { TestBed } from '@angular/core/testing';

import { MatchUpdateService } from './match-update.service';

describe('MatchUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchUpdateService = TestBed.get(MatchUpdateService);
    expect(service).toBeTruthy();
  });
});
