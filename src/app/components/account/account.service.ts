import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ILoginRequest, IRegistrationRequest } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url:string; 

  constructor(private http : HttpClient) {
    this.url = environment.apiUrl+'accounts'; 
   }
   isAuthorized():boolean{
    return this.getToken() != null;
   }
   login(data:ILoginRequest):Observable<any>{
    return this.http.post(`${this.url}/login`,{
      username: data.username,
      password: data.password,
    })
   }
   signup(data:IRegistrationRequest):Observable<any>{
    return this.http.post(`${this.url}/registration`,{
      username: data.username,
      password: data.password,
      email: data.email,
    })
   }
   logout():Observable<any>{
      this.deleteToken();
      return this.http.post(`${this.url}/logout`,null);
      
   }

   saveToken(token:string):void{
    //localStorage["token"]=token;
    localStorage.setItem("token",token);
   }

   getToken():string|null{
    //return localStorage["token"];
    return localStorage.getItem("token");
   }

   deleteToken():void{
    localStorage.removeItem("token");
   }
}
