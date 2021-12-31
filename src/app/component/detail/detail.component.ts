import { Component } from '@angular/core';
import { InvestissementService } from './../../services/investissement.service'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  itemInv: any;
  titre = 'doooooody'
  constructor(investissementService : InvestissementService) { 

    investissementService.getInvestissementById('id').subscribe(
        res => { console.log(res); this.itemInv =  res},
        err => { console.log(err) }
      )
}
}