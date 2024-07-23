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
  paymentAmount = 0;
  today: number = Date.now();

  _store:Store<{ privateOffer: object; }> | undefined;

   array:any[]=[];
   paymentDate:any[]=[]
   constructor(private fb: NonNullableFormBuilder, private store: Store<{ count: number,privateOffer:object }>) {
    this.privateOffer$ = this.store.select('privateOffer');

 
  }
  ngAfterContentInit(): void {
    this.array = Array.from({ length: this.paymentCount }, (_, index) => {index + 1});

    this.paymentDate = Array.from({ length: this.paymentCount }, (_, index) => {
     var counter = index + 1;
     var date = new Date();
     return new Date(date.setMonth(date.getMonth() + counter));

    });

  }
  ngOnInit(): void {
    this.privateOffer$.pipe(map((i)=>{
      this.paymentCount = JSON.parse(JSON.stringify(i))['offer']['numberOfPayments'];
      this.paymentAmount = JSON.parse(JSON.stringify(i))['offer']['contractAmount']/this.paymentCount;
    })).subscribe();
  }

}
