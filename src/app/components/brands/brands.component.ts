import { CarsService } from 'src/app/services/cars.service';
import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';
import { BrandsModel } from 'src/app/Models/BrandsModel';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  filterBrands;
  brands:BrandsModel[]=[];
  brandName:string;
  currentBrands:BrandsModel

  constructor( private brandsService:BrandsService,private carsService:CarsService){}
  
  ngOnInit():void{
    this.getBrands();
    }
    getBrands(){
      this.brandsService.getBrands().subscribe(data=>this.brands=data)
    }
  
    delete(brand:BrandsModel){
      
      this.brands = this.brands.filter(b=>b!==brand);
      this.brandsService.delete(brand).subscribe();

    }
    
     selectBrands(brands){
      this.currentBrands=brands;
      this.carsService.setSelectedBrands(brands)
    }

   
}
