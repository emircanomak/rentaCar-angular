import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl= " http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }

  add(value:any) {
    return this.httpClient.post(this.apiUrl,value)
  }
  
}
