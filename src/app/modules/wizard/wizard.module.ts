import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DetailsFormComponent } from './components/details-form/details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
  declarations: [
    MainComponent,
    DetailsFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzStepsModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzStatisticModule,
    NzDividerModule,
    NzDatePickerModule,
    NzInputNumberModule,
    WizardRoutingModule,
    
  ]
})
export class WizardModule { }
