import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { endOfMonth } from 'date-fns';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.scss'
})
export class DetailsFormComponent {

  ranges = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  contractDetailForm: FormGroup<{
    contractAmount: FormControl<string>;
    offerDuration: FormControl<string>;
    startDate: FormControl<string>;
    paymentAmount: FormControl<string>;
  }> = this.fb.group({
    contractAmount: ['', [Validators.required]],
    offerDuration: ['', [Validators.required]],
    startDate: ['',[Validators.required]],
    paymentAmount:['',[Validators.required]]
  });
 
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  submitForm(): void {
    console.log(this.contractDetailForm.value);
  }
  formatterDollar = (value: number): string => `$ ${value}`;


  constructor(private fb: NonNullableFormBuilder) {}

}
