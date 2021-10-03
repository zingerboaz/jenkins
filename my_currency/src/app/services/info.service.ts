import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrencyModel } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private _buttDisble=false;
  private buttDisble =new BehaviorSubject< boolean>(this._buttDisble);
  i=1;
  private _coins:CurrencyModel[];
  private coins=new BehaviorSubject<CurrencyModel[]>([]);
  
  constructor() {
    this. _buttDisble=false;
    this.buttDisble =new BehaviorSubject<boolean>(this._buttDisble);
    this._coins=[];
    this.coins=new BehaviorSubject<CurrencyModel[]>([]);
  }

add(a:CurrencyModel):void{
  this.i++
  if(this.i>5){this._buttDisble=true}
  this._coins=[...this._coins,a]
this.coins.next(this._coins,)
this.buttDisble.next(this._buttDisble,)
}



  
 get():Observable<CurrencyModel[]>{
  return this.coins;
} 
geet():Observable<boolean>{
  return this.buttDisble;
}

}



// geet():Observable<boolean>{
//   return this.buttDisble;
// }
