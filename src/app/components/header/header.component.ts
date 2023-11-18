import { Component } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public accountService:AccountService)
    {
     // let isTokenNotNull = JSON.parse(localStorage.getItem("token") || "") 
    }
  logout():void{
    this.accountService.logout();
    window.location.reload();
  }

  show():boolean{
    return this.accountService.isAuthorized();
  }
}
