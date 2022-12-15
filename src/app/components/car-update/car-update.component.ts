import { ColorsModel } from './../../Models/ColorsModel';
import { ActivatedRoute } from '@angular/router';
import { CarsModel } from 'src/app/Models/CarsModel';
import { CarsService } from 'src/app/services/cars.service';
import{FormGroup,FormBuilder,FormControl,Validators}from "@angular/forms"
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent {

  carUpdateForm:FormGroup
  cars:CarsModel
  colors:ColorsModel[]=[]
  params:number
  private location:Location

  constructor(private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute ,private carsService:CarsService){}


  ngOnInit():void {
    
    this.activatedRoute.params.subscribe((params)=>{  
        this.getCarsId(params["id"])
    })
       

  } 

   getCarsId(carId:number){
    this.carsService.getCarsId(carId).subscribe((data)=>{
      this.cars=data
      this.createUpdateForm()
    })
   }

   updateCar(){
      this.carsService.update(this.activatedRoute.snapshot.params["id"],this.carUpdateForm.value).subscribe(()=>{
      this.location.back();
    })
   }

  createUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      
      description:[this.cars.description,Validators.required],
      brandId:[this.cars.brandId,Validators.required],
      plate:[this.cars.plate,Validators.required],
      state:[this.cars.state,Validators.required],
      imageUrl:[this.cars.imageUrl,Validators.required],
      unitPrice:[this.cars.unitPrice,Validators.required],
      colorId:[this.cars.colorId,Validators.required]
    })
  }

}
