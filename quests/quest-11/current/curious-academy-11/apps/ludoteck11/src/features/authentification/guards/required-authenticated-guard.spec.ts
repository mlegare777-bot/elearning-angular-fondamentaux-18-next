import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { requiredAuthenticatedGuard } from './required-authenticated-guard';

describe('requiredAuthenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => requiredAuthenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
