import { Component, Input, OnInit } from '@angular/core';
import { infocurrencyModel } from 'src/app/models/infocurrency.model';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input()more: infocurrencyModel; 

  constructor() { }
  
  ngOnInit(): void {
  }
  
}
