import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { PageComponent } from './components/page/page.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HeroComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
