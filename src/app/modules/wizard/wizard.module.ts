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
import { NzSelectModule } from 'ng-zorro-antd/select';
import {FormsModule} from '@angular/forms';
import { PaymentsComponent } from './components/payments/payments.component';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { RecommendedConfigurationComponent } from './components/recommended-configuration/recommended-configuration.component';

@NgModule({
  declarations: [
    MainComponent,
    DetailsFormComponent,
    PaymentsComponent,
    RecommendedConfigurationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzStepsModule,
    NzSelectModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzStatisticModule,
    NzDividerModule,
    NzFlexModule,
    NzDatePickerModule,
    NzInputNumberModule,
    WizardRoutingModule,
    
  ]
})
export class WizardModule { }
