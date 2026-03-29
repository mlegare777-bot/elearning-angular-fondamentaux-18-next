import { TestBed } from '@angular/core/testing';

import { EditUpdateOneVideoGameService } from './edit-update-one-video-game-service';

describe('EditUpdateOneVideoGameService', () => {
  let service: EditUpdateOneVideoGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditUpdateOneVideoGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
