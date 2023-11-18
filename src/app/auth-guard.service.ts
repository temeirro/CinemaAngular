import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from './components/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AccountService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthorized()) {
      this.router.navigate(['login']);
      return false;
    }
    else{
      return true;
    }
  }

}
