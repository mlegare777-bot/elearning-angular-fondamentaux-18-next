import { CanActivateFn } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  console.info('guard')
  return true;
};
