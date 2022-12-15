import { ColorsModel } from './../../Models/ColorsModel';
import { ColorsService } from './../../services/colors.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsModel } from 'src/app/Models/CarsModel';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  
  currentColors:ColorsModel
  colors:ColorsModel[]=[];
  colorsName:any

 

constructor(private activatedRoute:ActivatedRoute,private carsService:CarsService,private colorService:ColorsService){}

  ngOnInit(){

    this.getColors()
  }


  getColors(){ 
    this.colorService.getColors().subscribe(data=>{
      this.colors = data;
    })
  }
  // selectCars(data:any){
  //   this.colorsName=data
  // }

  selectColors(colors){
    this.currentColors=colors;
    this.carsService.setSelectedColors(colors)
  }
  

}
