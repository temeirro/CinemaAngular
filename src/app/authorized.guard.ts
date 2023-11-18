import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

export const authorizedGuard: CanActivateFn = (route, state) => {
  return true;
};
