import { Component, OnInit } from '@angular/core';
import { CurrencyModel } from 'src/app/models/currency.model';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-realitim',
  templateUrl: './realitim.component.html',
  styleUrls: ['./realitim.component.css']
})
export class RealitimComponent implements OnInit {
  coins:CurrencyModel[];
  constructor(private infoService :InfoService) { }

  ngOnInit(): void {
  this.infoService.get().subscribe(res =>{this.coins=res;});
  
  }



}
