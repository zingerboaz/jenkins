import { Component, OnInit } from '@angular/core';
import { CurrencyModel } from 'src/app/models/currency.model';
import { MorinfoService } from 'src/app/services/morinfo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currencys:CurrencyModel[];
  
  b: CurrencyModel= { id: '',
    symbol: '',
    name: ''};
  a = 0;
  isSearch:boolean;
  textButton:string;

  constructor(private morinfoService:MorinfoService) {
    this.textButton='search';
   }
  
  ngOnInit(): void {
  this.currencys=this.morinfoService.currencys
  console.log(this.currencys)
}
 
search(symbol:string):void {
  this.isSearch=!this.isSearch;
  this.textButton = this.isSearch?'נקה':'search';
  if(this.isSearch){

    this.a++;
    this.b = this.morinfoService.currencys.find(s => { return s.symbol === symbol })
    if(this.b.symbol){
      this.a++;
    }
    console.log(this.b)
  }
  else{
    this.a=0;
    this.b=null;
  }
  }
}
