import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { WizardRoutingModule } from './wizard-routing.module';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NzStepsModule,
    NzFormModule,
    WizardRoutingModule
  ]
})
export class WizardModule { }
