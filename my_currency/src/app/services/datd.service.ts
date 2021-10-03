import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import{tap}from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatdService {
public CURRENCY_CACHE={}

  baseUrl1=`https://api.coingecko.com/api/v3/coins/`


  constructor(private httpClint:HttpClient) { }


  get(id: string): Observable<any> {
    if(this.CURRENCY_CACHE[id]){return of( this.CURRENCY_CACHE[id])}
    else{
    return this.httpClint.get(`${this.baseUrl1}${id}`).pipe(tap(r=>this.CURRENCY_CACHE[id]=r))
  setTimeout(()=>{
    delete this.CURRENCY_CACHE,22*1000});
  }
  }}



