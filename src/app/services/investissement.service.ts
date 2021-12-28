import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestissementService {

  constructor() { }
  getInvestissements(){
    return ['inv1', 'inv2','inv3','inv4']
  }
}
