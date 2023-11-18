import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ILoginRequest } from '../account';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
  })

  constructor(private fb : FormBuilder,private accountService:AccountService,private router: Router,
    private activeRoute: ActivatedRoute){
    {

    }
  }
  show():boolean{
    return this.accountService.isAuthorized();
  }
  login():void{
    if(this.loginForm.invalid)
    {
      alert("invalid value! Please, enter again.");
      return;
    }
    let dataRequest : ILoginRequest = this.loginForm.value as ILoginRequest;
    this.accountService.login(dataRequest).subscribe(res=>{
      console.log(`"Login success. Token: ${res}"`);
      this.accountService.saveToken(res);
      this.router.navigate(['movies']);
    },err=>{
      console.warn(err);
    });
  }
}
