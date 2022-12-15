import { BrandsService } from './../../services/brands.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators, Form}from "@angular/forms"

@Component({
  selector: 'app-brands-add',
  templateUrl: './brands-add.component.html',
  styleUrls: ['./brands-add.component.css']
})
export class BrandsAddComponent implements OnInit {

  brandAddForm:FormGroup

  constructor(private formBuilder:FormBuilder, private brandsService:BrandsService){}
  
  ngOnInit(): void {
    this.createBrandAddForm()
  }

       
  createBrandAddForm(){

    this.brandAddForm = this.formBuilder.group({

       name:["",Validators.required],
       
    });
  }

  add(){
    
    this.brandsService.add(this.brandAddForm.value).subscribe(data=>{

    })
  }


}
