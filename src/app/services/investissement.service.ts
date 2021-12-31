import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestissementService {
id:any;
  constructor(private http: HttpClient) { }

  getInvestissement(): Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/api/investissements/');
  } 

  getInvestissementById(id:any): Observable<any>
  {
    return this.http.get('http://127.0.0.1:8000/api/investissement/'+id);
  } 
  
}
