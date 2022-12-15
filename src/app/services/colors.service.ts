import { ColorsModel } from './../Models/ColorsModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  apiUrl="http://localhost:3000/colors"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorsModel[]>{
    return this.httpClient.get<ColorsModel[]>(this.apiUrl)
  }

  getColorsById(colorid:number):Observable<ColorsModel[]>{
    return this.httpClient.get<ColorsModel[]>(this.apiUrl+"?id=" +colorid)
  }
  

}
