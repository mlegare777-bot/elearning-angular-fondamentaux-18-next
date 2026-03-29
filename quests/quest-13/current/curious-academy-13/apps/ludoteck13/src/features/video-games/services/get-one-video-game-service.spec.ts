import { TestBed } from '@angular/core/testing';

import { GetOneVideoGameService } from './get-one-video-game-service';

describe('GetOneVideoGameService', () => {
  let service: GetOneVideoGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneVideoGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
