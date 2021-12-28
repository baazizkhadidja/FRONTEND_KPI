import { Component} from '@angular/core';
import{ InvestissementService } from './../../services/investissement.service'

@Component({
  selector: 'app-investissement',
  templateUrl: './investissement.component.html',
  styleUrls: ['./investissement.component.css']
})
export class InvestissementComponent {
  title = "Doody script";
  investissements: any[];
  
  constructor(investissementService : InvestissementService) { 
    this.investissements = investissementService.getInvestissements();
  }


 

}
