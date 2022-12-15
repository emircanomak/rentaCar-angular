import { BrandsModel } from './../../Models/BrandsModel';
import { BrandsService } from './../../services/brands.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent {
 
  brandUpdateForm:FormGroup
  brands:BrandsModel
  params:number
  location:Location


  constructor( private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute  ,private brandsService:BrandsService){}

  ngOnInit():void{
      this.activatedRoute.params.subscribe((params)=>{
        this.getBrandsId(params["id"])
      })

  }

  getBrandsId(brandsId:number){
    this.brandsService.getBrandsId(brandsId).subscribe((data)=>{
      this.brands=data
      this.createUpdateForm()
    })

  }


   updateBrands(){
    this.brandsService.update(this.activatedRoute.snapshot.params["id"],this.brandUpdateForm.value).subscribe(()=>{
      // this.location.back()
    })
   }

   createUpdateForm(){

    this.brandUpdateForm = this.formBuilder.group({  
      name:[this.brands.name, Validators.required],

    })

   }

}
