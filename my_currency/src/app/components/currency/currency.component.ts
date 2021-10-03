import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyModel } from 'src/app/models/currency.model';
import { infocurrencyModel } from 'src/app/models/infocurrency.model';
import { DatdService } from 'src/app/services/datd.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input() currency:CurrencyModel;
  morInfo:infocurrencyModel;
  show = false;
  buttDisble=false;
  
  
  constructor(private datdService: DatdService, private infoService: InfoService) { }

  ngOnInit(): void {
this.infoService.geet().subscribe(res =>{this.buttDisble=res;});
  }
  exstraInfo(id: string): void {
    if (this.show === false) {
      this.show = true;
      this.datdService.get(id).subscribe(Data => {
        this.morInfo = ({
          pic: Data.image.small,
          usd: Data.market_data.current_price.usd,
          ils: Data.market_data.current_price.ils,
          eur: Data.market_data.current_price.eur

        })
        setTimeout(()=>{
          delete this.datdService.CURRENCY_CACHE,10*1000});
        
      });
      
      }else {
        this.show = false;
      
    }
  
  }
add():void{
  this.infoService.add(this.currency)
  
}


}