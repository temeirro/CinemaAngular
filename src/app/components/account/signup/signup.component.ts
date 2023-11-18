import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ILoginRequest, IRegistrationRequest } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;
  signupForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
    email:['',Validators.required],
  })

  constructor(private fb : FormBuilder,private accountService:AccountService,private router: Router,
    private activeRoute: ActivatedRoute){
    {

    }
  }
  signup():void{
    if(this.signupForm.invalid)
    {
      alert("invalid value! Please, enter again.");
      return;
    }
    let dataRequest : IRegistrationRequest = this.signupForm.value as IRegistrationRequest;
    this.accountService.signup(dataRequest).subscribe(res=>{
      console.log(`"Registration success. Token: ${res}"`);
      this.router.navigate(['movies']);
    },err=>{
      console.warn(err);
    });
  }
}
