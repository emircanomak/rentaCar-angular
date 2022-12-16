import { Router } from '@angular/router';
import { TokenModel } from './../../Models/TokenModel';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginAddForm:FormGroup
  tokenModel:TokenModel
  constructor(private authService:AuthService , private formBuilder:FormBuilder,
    private router:Router){}

  ngOnInit(){
    this.createAddForm();
  }

  createAddForm(){
    this.loginAddForm = this.formBuilder.group({

      email:["",Validators.required],
      password:["",Validators.required]

    })
  }

  login(){
    
    this.authService.login(this.loginAddForm.value).subscribe(data=>{ 
    
      this.tokenModel = data [0] 
      
      localStorage.setItem("token",this.tokenModel.token) 
      console.log(data)
      this.router.navigate([""])
     
    })
  }


}
