import { ColorsModel } from './../../Models/ColorsModel';
import { CarsService } from './../../services/cars.service';
import { Component } from '@angular/core';
import { CarsModel } from 'src/app/Models/CarsModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  filterText;
  cars:CarsModel[]=[];
  car:CarsModel
  colors:ColorsModel[]=[]
  detail:string;
  
  constructor(private activatedRoute:ActivatedRoute,private carsService:CarsService){}

  ngOnInit():void {

    this.activatedRoute.params.subscribe(params=>{
       this.getCars();
    })
      
   
    
  }
  // arabanın id sine göre
  getCarsById(id:number){
    this.carsService.getCarsById(id).subscribe(data=>{
       this.car=data
       console.log("İd"+data)
    })
     
  }
  //tüm arabalar gelir
  getCars(){
   this.carsService.getCars().subscribe((data)=>{
    this.cars=data
   })
   
   
  }
  //brandId e göre getirir
  getCarsByBrandId(id:number){
    this.carsService.getCarsByBrandId(id).subscribe(data=>{
      this.cars = data
    })
    
  }
  selectDetail(data:any){
    this.detail= data
  }
  delete(car:CarsModel){
    
    this.cars = this.cars.filter(c=>c!==car);
    this.carsService.delete(car).subscribe();
    
   }
   getColorsById(colorid:number){
    this.carsService.getColorsById(colorid).subscribe(data=>{
      this.cars=data
      console.log(data);
      
    })
   }
  
    addToCart(car:CarsModel){
     
    }
  
    
  
}



