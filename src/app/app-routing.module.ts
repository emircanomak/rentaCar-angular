import { LoginGuard } from './components/guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandsAddComponent } from './components/brands-add/brands-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarsDetailComponent } from './components/cars-detail/cars-detail.component';
import { CarsComponent } from './components/cars/cars.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"cars",component:CarsComponent,canActivate:[LoginGuard]},
{path:"",pathMatch:"full" ,component:CarsComponent,canActivate:[LoginGuard]},
{path:"carsfilter/:id/:state",component:CarsComponent,canActivate:[LoginGuard]},
{path:"brands/:id",component:CarsComponent,canActivate:[LoginGuard]},
{path:"carsdetail/:id",component:CarsDetailComponent,canActivate:[LoginGuard]},
{path:"car/add",component:CarAddComponent,canActivate:[LoginGuard]},
{path:"brand/add",component:BrandsAddComponent,canActivate:[LoginGuard]},
{path:"carupdate/:id",component:CarUpdateComponent},
{path:"brandupdate/:id",component:BrandUpdateComponent},
{path:"color/:colorid",component:CarsComponent},
{path:"brand/:id/color/:colorId",component:CarsComponent},
{path:"register",component:RegisterComponent},
{path:"login", component:LoginComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
