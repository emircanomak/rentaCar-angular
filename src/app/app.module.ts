import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarsComponent } from './components/cars/cars.component';
import { NaviComponent } from './layouts/navi/navi.component';
import { CarsDetailComponent } from './components/cars-detail/cars-detail.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrandsAddComponent } from './components/brands-add/brands-add.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { BrandSearchPipe } from './pipes/brand-search.pipe';
import { ColorsComponent } from './components/colors/colors.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CarsComponent,
    NaviComponent,
    CarsDetailComponent,
    CarAddComponent,
    BrandsAddComponent,
    VatAddedPipe,
    SearchPipePipe,
    CarUpdateComponent,
    BrandUpdateComponent,
    BrandSearchPipe,
    ColorsComponent,
    RegisterComponent,
    LoginComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
