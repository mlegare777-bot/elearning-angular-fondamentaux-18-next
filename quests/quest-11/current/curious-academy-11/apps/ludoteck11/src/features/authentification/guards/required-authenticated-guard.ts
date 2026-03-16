import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateUserService } from '../services/authenticate-user';

export const requiredAuthenticatedGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthenticateUserService);
  const router = inject(Router);

  if (!service.isAuthentificated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
