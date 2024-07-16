import { Component, OnInit, ViewContainerRef, ViewChild, AfterViewChecked, OnDestroy, viewChild, TemplateRef, ChangeDetectorRef, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { DetailsFormComponent } from '../details-form/details-form.component';
import { environment } from '../../../../../environments/environment';
import { PaymentsComponent } from '../payments/payments.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RecommendedConfigurationComponent } from '../recommended-configuration/recommended-configuration.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit  {

  @ViewChild('stepContainer', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef | undefined;
  @ViewChild('steps', { read: ViewContainerRef }) stepsVCref: ViewContainerRef | undefined;

  @ViewChild(TemplateRef) template: any;

  @ViewChild(DetailsFormComponent, { static: true }) private dynamicHost!: DetailsFormComponent;

  private interval: number | undefined;
  private currentIndex = 1;
  privateOffer$: Observable<object>;


  constructor(private cd: ChangeDetectorRef, private store: Store<{ count: number,privateOffer:object }>) {
    this.privateOffer$ = this.store.select('privateOffer');

    
  }
  ngAfterViewInit(): void {
    this.addDetailComponent();
    this.cd.detectChanges();
    }
  ngAfterContentInit(): void {
    
  }
  ngAfterContentChecked(): void {

  }
  addStep() {

  }
  addDetailComponent() {

    const componentRef = this.viewContainerRef?.createComponent(DetailsFormComponent);
  }
  addPaymentComponent(){
    const componentRef = this.viewContainerRef?.createComponent(PaymentsComponent);

  }
  addRecConfgComponent(){
    const componentRef = this.viewContainerRef?.createComponent(RecommendedConfigurationComponent);

  }
  current = 0;

  index = 'First-content';
  submitForm() { }
  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    this.viewContainerRef?.clear();
    switch (this.current) {
      case 0: {
        this.addDetailComponent();
        break;
      }
      case 1: {
        this.addRecConfgComponent();
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}
