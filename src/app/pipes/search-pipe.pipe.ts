import { Pipe, PipeTransform } from '@angular/core';
import { CarsModel } from '../Models/CarsModel';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: CarsModel[], filterText: string): CarsModel[] {

    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((c:CarsModel)=>c.description.toLocaleLowerCase().indexOf(filterText)!==-1):value;

  }

}
