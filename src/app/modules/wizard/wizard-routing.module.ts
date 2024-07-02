import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { MainComponent } from './components/main/main.component';
const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }