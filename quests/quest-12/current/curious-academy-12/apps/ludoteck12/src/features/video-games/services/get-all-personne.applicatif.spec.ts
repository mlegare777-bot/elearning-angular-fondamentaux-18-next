import { TestBed } from '@angular/core/testing';

import { GetAllPersonneApplicatif } from './get-all-personne.applicatif';

describe('GetAllPersonneApplicatif', () => {
  let service: GetAllPersonneApplicatif;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPersonneApplicatif);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
