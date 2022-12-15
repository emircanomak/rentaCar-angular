import { BrandsModel } from './../Models/BrandsModel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandSearch'
})
export class BrandSearchPipe implements PipeTransform {

  transform(value: BrandsModel[], filterBrands: string): BrandsModel[] {

    filterBrands=filterBrands?filterBrands.toLocaleLowerCase():null
    return filterBrands?value.filter((b:BrandsModel)=> b.name.toLocaleLowerCase().indexOf(filterBrands)!==-1):value
  }

}
