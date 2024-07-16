import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { LayoutComponent } from './components/layout/layout.component';
import { DetailsFormComponent } from '../wizard/components/details-form/details-form.component';
const routes: Routes = [
  { path: '', component: LayoutComponent, pathMatch: 'full',
    children: [
      {path:
        'details',component: DetailsFormComponent
      }
    ]
   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }