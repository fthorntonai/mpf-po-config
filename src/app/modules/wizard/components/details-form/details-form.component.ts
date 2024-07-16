import { AfterContentInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { endOfMonth } from 'date-fns';
import { map, Observable } from 'rxjs';
import { increment,decrement,reset } from '../../../../state/counter.actions';
import { initializeState, setState } from '../../../../state/private-offer.action';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.scss'
})
export class DetailsFormComponent implements AfterContentInit {
  count$: Observable<number>;
  privateOffer$: Observable<object>;

  ranges = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  inputValue: string | null = null;
  textValue: string | null = null;

  contractDetailForm: FormGroup<{
    contractAmount: FormControl<string>;
    numberOfPayments: FormControl<number>;
    paymentFrequency: FormControl<string>;
    offerDuration: FormControl<string>;
    startDate: FormControl<string>;
    endDate: FormControl<string>;
    paymentAmount: FormControl<string>;
    range:FormControl<string>;
    jsonView:FormControl<string>;
  }> = this.fb.group({
    contractAmount: ['0', [Validators.required]],
    numberOfPayments:[1,[Validators.required]],
    paymentFrequency:['',[Validators.required]],
    offerDuration: ['0', [Validators.required]],
    startDate: ['',[Validators.required]],
    endDate:['',[Validators.required]],
    paymentAmount:['',[Validators.required]],
    range:['',[Validators.required]],
    jsonView:['',[Validators.required]]
  });
 

  onChange(event:any): void {
    console.log('onChange: ', event);
    this.store.dispatch(setState({offer: this.contractDetailForm.value}));
    
  }
  submitForm(): void {
    console.log(this.contractDetailForm.value);
  }
  formatterDollar = (value: number): string => `$ ${value}`;


  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  constructor(private fb: NonNullableFormBuilder, private store: Store<{ count: number,privateOffer:object }>) {
    this.count$ = store.select('count');
    this.privateOffer$ = this.store.select('privateOffer');

    
  }
  ngAfterContentInit(): void {
    this.privateOffer$ = this.store.select('privateOffer');
    console.log(this.privateOffer$);
    this.privateOffer$.pipe(map((i)=>{
      this.contractDetailForm.setValue(JSON.parse(JSON.stringify(i))['offer']);
    })).subscribe(); }

}
