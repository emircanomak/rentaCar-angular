import { ColorsService } from './../../services/colors.service';
import { BrandsService } from './../../services/brands.service';
import { ColorsModel } from './../../Models/ColorsModel';
import { BrandsModel } from 'src/app/Models/BrandsModel';
import { CarsModel } from './../../Models/CarsModel';
import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators}from "@angular/forms"
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm: FormGroup;
  carBrands:BrandsModel[]=[]
  carColors:ColorsModel[]=[]
  cars:CarsModel[];

   constructor(private formBuilder:FormBuilder,
    private carsService:CarsService,
    private brandsService:BrandsService,
    private colorsService:ColorsService
    ){}

   ngOnInit():void{
    this.createCarAddForm()

   }
   createCarAddForm(){
     this.carAddForm = this.formBuilder.group({
      
      description:["",Validators.required],
      plate:["",Validators.required],
      state:["",Validators.required],
      imageUrl:["",Validators.required],
      unitPrice:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required]

     })
   }
   add(){
   
     if(this.carAddForm.value){
      let carInputData=Object.assign({},this.carAddForm.value);
     this.carsService.add(carInputData).subscribe((data)=>{

    });

      }

   }
  //  getCarsBrands(){
  //   this.brandsService.getBrands().subscribe((data)=>{
  //     this.carBrands = data
  //   })
  //  }
  //  getColors(){
  //   this.colorsService.getColors().subscribe((data)=>{
  //     this.carColors = data
  //   })
  //  }
 
}
