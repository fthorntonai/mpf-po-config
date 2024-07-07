import { Component, OnInit, ViewContainerRef, ViewChild, AfterViewChecked, OnDestroy, viewChild, TemplateRef, ChangeDetectorRef, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { DetailsFormComponent } from '../details-form/details-form.component';
import { environment } from '../../../../../environments/environment';
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

  constructor(private cd: ChangeDetectorRef) {
    console.log(environment.baseUrl);
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
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
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
