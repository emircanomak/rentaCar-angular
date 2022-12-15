import { BrandsModel } from './../Models/BrandsModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  
  add(value:any){
    return this.httpClient.post(this.apiUrl,value)
  }
  delete(brands:BrandsModel):Observable<BrandsModel>{
    return this.httpClient.delete<BrandsModel>(this.apiUrl+"/"+brands.id)
  }
  update(id,brand){
    return this.httpClient.put(this.apiUrl + "/"+ id,brand)
  }


  apiUrl="http://localhost:3000/brands"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandsModel[]>{
    
    return this.httpClient.get<BrandsModel[]>(this.apiUrl)

   
  }

  getBrandsId(brandsId:number):Observable<BrandsModel>{

    return this.httpClient.get<BrandsModel>(this.apiUrl +"/" + brandsId)

  }
  
}
