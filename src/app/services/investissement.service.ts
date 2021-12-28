import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestissementService {

  constructor(private http: HttpClient) { }

  getInvestissement(): Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/api/investissements/');
  } 
  
}
