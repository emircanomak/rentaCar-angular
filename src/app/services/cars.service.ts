import { BrandsModel } from './../Models/BrandsModel';
import { ColorsModel } from './../Models/ColorsModel';
import { CarsModel } from './../Models/CarsModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  apiUrl = 'http://localhost:3000/cars';
  queryPath: string = '';
  selectedBrands: BrandsModel;
  selecetedColors: ColorsModel;

  constructor(private httpClient: HttpClient) {}

  add(value: any) {
    return this.httpClient.post(this.apiUrl, value);
  }

  delete(cars: CarsModel): Observable<CarsModel> {
    return this.httpClient.delete<CarsModel>(this.apiUrl + '/' + cars.id);
  }

  update(id, car: any) {
    return this.httpClient.put(this.apiUrl + '/' + id, car);
  }

  getCars(): Observable<CarsModel[]> {
    return this.httpClient.get<CarsModel[]>(this.createApiUrl());
  }
  getCarsById(id: number): Observable<CarsModel> {
    return this.httpClient.get<CarsModel>(this.apiUrl + '?id=' + id);
  }

  getCarsByBrandId(id: number): Observable<CarsModel[]> {
    return this.httpClient.get<CarsModel[]>(this.apiUrl + '?brandId=' + id);
  }

  getCarsByDetail(id: number): Observable<CarsModel[]> {
    return this.httpClient.get<CarsModel[]>(this.apiUrl + '?id=' + id);
  }

  getCarsId(carId: number): Observable<CarsModel> {
    return this.httpClient.get<CarsModel>(this.apiUrl + '/' + carId);
  }
  getColorsById(colorid: number): Observable<CarsModel[]> {
    return this.httpClient.get<CarsModel[]>(
      this.apiUrl + '?colorId=' + colorid
    );
  }

  setSelectedBrands(brands) {
    this.selectedBrands = brands;
  }
  setSelectedColors(colors) {
    this.selecetedColors = colors;
   }

  createApiUrl() {
    if (this.selectedBrands) {
      this.queryPath = this.apiUrl + '?brandId=' + this.selectedBrands.id;
    }
    if (this.selecetedColors) {
      this.queryPath = this.apiUrl + '?colorId=' + this.selecetedColors.colorId;
    }
    if (this.selectedBrands && this.selecetedColors) {

      this.queryPath = this.apiUrl + '?brandId=' + this.selectedBrands.id + '&colorId=' +  this.selecetedColors.colorId;
       
    }
    if (!this.selectedBrands && !this.selecetedColors) {
      this.queryPath = this.apiUrl;
    }
    return this.queryPath;
  }
}
