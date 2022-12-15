import { ColorsComponent } from './components/colors/colors.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandsAddComponent } from './components/brands-add/brands-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarsDetailComponent } from './components/cars-detail/cars-detail.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarsComponent } from './components/cars/cars.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"cars",component:CarsComponent},
{path:"",pathMatch:"full" ,component:CarsComponent},
{path:"",component:CarsComponent},
{path:"carsfilter/:id/:state",component:CarsComponent},
{path:"brands/:id",component:CarsComponent},
{path:"carsdetail/:id",component:CarsDetailComponent},
{path:"car/add",component:CarAddComponent},
{path:"brand/add",component:BrandsAddComponent},
{path:"carupdate/:id",component:CarUpdateComponent},
{path:"brandupdate/:id",component:BrandUpdateComponent},
{path:"color/:colorid",component:CarsComponent},
{path:"brand/:id/color/:colorId",component:CarsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
