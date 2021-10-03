import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from'@angular/forms';
import{RouterModule, Routes} from '@angular/router';
import{HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CurrencylistComponent } from './components/currencylist/currencylist.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { RealitimComponent } from './components/realitim/realitim.component';
import { AboutComponent } from './components/about/about.component';

const routes:Routes=[
 {path:'',component:HomeComponent},
 {path:'Currencylist',component:CurrencylistComponent},
  {path:'Realitim',component:RealitimComponent},
  {path:'about',component:AboutComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencylistComponent,
    CurrencyComponent,
    InfoComponent,
    SearchComponent,
    RealitimComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
