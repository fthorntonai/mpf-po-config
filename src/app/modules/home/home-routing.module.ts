import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { PageComponent } from './components/page/page.component';
const routes: Routes = [
  { path: '', component: PageComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }