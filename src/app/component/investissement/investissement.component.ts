import { Component, OnInit} from '@angular/core';
import { InvestissementService } from './../../services/investissement.service'
import { INVESTISSEMENT } from './../../investissement'


@Component({
  selector: 'app-investissement',
  templateUrl: './investissement.component.html',
  styleUrls: ['./investissement.component.css']
})
export class InvestissementComponent implements OnInit{
  investissements!: INVESTISSEMENT[];
  searchValue!:string;
  
  constructor(private investissementService : InvestissementService){ }

  ngOnInit(): void {
      this.getInv();
  }

  getInv(){
    this.investissementService.getInvestissement().subscribe((res)=>{
      this.investissements = res;
    })
  }   
  }
