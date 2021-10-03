import { Injectable } from '@angular/core';
import { CurrencyModel } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class MorinfoService {
  currencys:CurrencyModel[]=[];

  
constructor() { }
}
