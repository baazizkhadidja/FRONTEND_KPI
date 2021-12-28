import { Component} from '@angular/core';
import{ InvestissementService } from './../../services/investissement.service'

@Component({
  selector: 'app-investissement',
  templateUrl: './investissement.component.html',
  styleUrls: ['./investissement.component.css']
})
export class InvestissementComponent {
  investissements: any;
  
  constructor(investissementService : InvestissementService) { 
      investissementService.getInvestissement().subscribe(
        res => { console.log(res); this.investissements =  res},
        err => { console.log(err) }
      )
  }


 

}
