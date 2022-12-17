import { TokenModel } from './../Models/TokenModel';
import { LoginModel } from './../Models/LoginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

apiUrl=" http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel){
    return this.httpClient.get<TokenModel[]>
    (this.apiUrl +"/?email=" + user.email +"&password=" + user.password)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true
    }else {
      return false
    }
  }

}
