import { Component, OnInit } from '@angular/core';
import { CurrencyModel } from 'src/app/models/currency.model';
import { CurrencylistService } from 'src/app/services/currencylist.service';
import { MorinfoService } from 'src/app/services/morinfo.service';

@Component({
  selector: 'app-currencylist',
  templateUrl: './currencylist.component.html',
  styleUrls: ['./currencylist.component.css']
})
export class CurrencylistComponent implements OnInit {
  currencys: CurrencyModel[] = [];

  constructor(private currencylistService: CurrencylistService, private morinfoService: MorinfoService) { }

  ngOnInit(): void {
    this.currencylistService.get().subscribe((Data: any) => {
      this.currencys = Data.slice(0, 100);
      this.morinfoService.currencys = this.currencys;
        console.log(this.morinfoService.currencys);});
}
 }




