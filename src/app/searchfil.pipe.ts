import { INVESTISSEMENT } from './investissement'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfil'
})
export class SearchfilPipe implements PipeTransform {

  transform(investissements: INVESTISSEMENT[], searchValue: string): INVESTISSEMENT[] {
    if(!investissements || !searchValue ){
      return investissements;
    }
    return investissements.filter(INVESTISSEMENT => 
      INVESTISSEMENT.entreprise.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
