import { Component, OnInit } from '@angular/core';
import { InvestissementService } from './../../services/investissement.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{

  constructor(private investissementService : InvestissementService,private activatedRoute: ActivatedRoute) {}

id: any;
itemInv:any;
ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
    this.id = params.get('id');
    });
    this.getInvId(this.id);
}
getInvId(id:any){
  this.investissementService.getInvestissementById(id).subscribe((res) =>{
    this.itemInv = res;
  }
  )
}
}



