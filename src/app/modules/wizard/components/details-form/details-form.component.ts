import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { endOfMonth } from 'date-fns';
import { Observable } from 'rxjs';
import { increment,decrement,reset } from '../../../../state/counter.actions';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.scss'
})
export class DetailsFormComponent {
  count$: Observable<number>

  ranges = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  inputValue: string | null = null;
  textValue: string | null = null;

  contractDetailForm: FormGroup<{
    contractAmount: FormControl<string>;
    offerDuration: FormControl<string>;
    startDate: FormControl<string>;
    endDate: FormControl<string>;
    paymentAmount: FormControl<string>;
    range:FormControl<string>;
 //   jsonView:FormControl<string>;
  }> = this.fb.group({
    contractAmount: ['0', [Validators.required]],
    offerDuration: ['36', [Validators.required]],
    startDate: ['',[Validators.required]],
    endDate:['',[Validators.required]],
    paymentAmount:['',[Validators.required]],
    range:['',[Validators.required]],
//    jsonView:['',[Validators.required]]
  });
 
  onChange(result: Date): void {
    console.log('onChange: ', result);
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

  constructor(private fb: NonNullableFormBuilder, private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

}
