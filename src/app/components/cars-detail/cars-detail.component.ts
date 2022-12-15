import { BrandsService } from './../../services/brands.service';
import { CarsModel } from 'src/app/Models/CarsModel';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent {

  cars:CarsModel[]=[]

  constructor(private activatedRoute:ActivatedRoute,private carsService:CarsService, private brandService:BrandsService,private formbuilder:FormBuilder){}

  ngOnInit():void {

    this.activatedRoute.params.subscribe(params=>{
      this.getCarsByDetail(params["id"])



    //   if(params["id"]){
    //     this.getCarsByDetail(params["id"])
    //   // }else{
    //   //   console.log("Gelmedi")
    //   // }


    })

  }
  getCarsByDetail(id:number){
    this.carsService.getCarsByDetail(id).subscribe(data=>{
      this.cars = data
    })

  }
  

  // update():void {

  //   this.carsService.update(this.cars).subscribe(()=>{
  //       this.location.back();
  //   })
    
     
  // }
  

}
