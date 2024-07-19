import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recommended-configuration',
  templateUrl: './recommended-configuration.component.html',
  styleUrl: './recommended-configuration.component.scss'
})
export class RecommendedConfigurationComponent implements OnDestroy {
  privateOffer$: Observable<object>;
  protected today : number = Date.now();
  protected todayYear = new Date().getFullYear();
  protected todayMonth = new Date().getMonth();
  protected endDateYear : number = this.todayYear;
  protected _ppPayment:number = 0;
  protected _billingTerm:string = "";
  protected _conforming = true;
  protected _numberOfPayments = 1;
  protected _contract_total = 0;

  constructor(private store: Store<{ count: number,privateOffer:object }>) {

    this.privateOffer$ = this.store.select('privateOffer');
    this.privateOffer$.subscribe((value)=>{
      this._ppPayment =JSON.parse(JSON.stringify(value))['offer']['contractAmount'] / JSON.parse(JSON.stringify(value))['offer']['numberOfPayments'];
      this._billingTerm = JSON.parse(JSON.stringify(value))['offer']['paymentFrequency'];
      this._conforming = JSON.parse(JSON.stringify(value))['offer']['is_equal_payments'] && JSON.parse(JSON.stringify(value))['offer']['is_invoice_upon_purchase'] && this._billingTerm != 'Other' ;
      this._numberOfPayments = JSON.parse(JSON.stringify(value))['offer']['numberOfPayments'];
      this._contract_total = JSON.parse(JSON.stringify(value))['offer']['contractAmount'];
      if(this._numberOfPayments == 1){
        this._conforming = false;
      }
      if(this._numberOfPayments > 12){
        this.endDateYear = this.todayYear + Math.trunc( Number(this._numberOfPayments) / 12);
      }

    });

    
  }
  ngOnDestroy(): void {
  }


}
