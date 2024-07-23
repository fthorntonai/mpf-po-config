import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { endOfMonth } from 'date-fns';
import { filter, map, Observable } from 'rxjs';
import { increment,decrement,reset } from '../../../../state/counter.actions';
import { initializeState, setState } from '../../../../state/private-offer.action';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.scss'
})
export class DetailsFormComponent implements OnInit, AfterContentInit,OnDestroy {
  count$: Observable<number>;
  privateOffer$: Observable<object>;
  privateOfferSubscription :any|undefined = undefined;
  today = Date.now();
  checked = true;
  ranges = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  inputValue: string | null = null;
  textValue: string | null = null;

  contractDetailForm: FormGroup<{
    contractAmount: FormControl<string>;
    numberOfPayments: FormControl<number>;
    paymentFrequency: FormControl<string>;
    offerDuration: FormControl<string>;
    startDate: FormControl<number>;
    endDate: FormControl<string>;
    paymentAmount: FormControl<string>;
    range:FormControl<string>;
    firstInvoice:FormControl<string>;
    jsonView:FormControl<string>;
    is_equal_payments:FormControl<boolean>;
    is_invoice_upon_purchase:FormControl<boolean>;

  }> = this.fb.group({
    contractAmount: ['0', [Validators.required]],
    numberOfPayments:[1,[Validators.required]],
    paymentFrequency:['',[Validators.required]],
    offerDuration: ['0', [Validators.required]],
    startDate: [this.today,[Validators.required]],
    endDate:['',[Validators.required]],
    paymentAmount:['',[Validators.required]],
    range:['',[Validators.required]],
    firstInvoice:['',Validators.required],
    jsonView:['',[Validators.required]],
    is_equal_payments:[true,[Validators.required]],
    is_invoice_upon_purchase:[true,[Validators.required]]

  });
 
  onBlur(event:any){
    this.store.dispatch(setState({offer: this.contractDetailForm.value}));    
  }
  
  onChange(event:any): void {
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
  ngOnInit(): void {
   /* this.contractDetailForm.valueChanges.subscribe((data)=>{
      console.log(data);
    });
*/
  }
  ngOnDestroy(): void {
    
  }
  ngAfterContentInit(): void {
    
    this.privateOffer$.pipe(map((i)=>{
      this.contractDetailForm.setValue(JSON.parse(JSON.stringify(i))['offer']);
    })).subscribe(); 

  }

}
