import { AfterContentInit, Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzWrap } from 'ng-zorro-antd/flex';
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent implements AfterContentInit {
  paymentCount = 0;
  privateOffer$: Observable<object>;
  _store:Store<{ privateOffer: object; }> | undefined;

   array:any[]=[];
   constructor(private fb: NonNullableFormBuilder, private store: Store<{ count: number,privateOffer:object }>) {
    this.privateOffer$ = this.store.select('privateOffer');

 
  }
  ngAfterContentInit(): void {
    this.array = Array.from({ length: this.paymentCount }, (_, index) => index + 1);

  }
  ngOnInit(): void {
    this.privateOffer$.pipe(map((i)=>{
      this.paymentCount = JSON.parse(JSON.stringify(i))['offer']['numberOfPayments'];
    })).subscribe();
  }

}
