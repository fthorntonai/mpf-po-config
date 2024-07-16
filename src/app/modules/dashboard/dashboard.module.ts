import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService, MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { NONE_TYPE } from '@angular/compiler';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzStepsModule,
  ],
  providers:[ { provide: NZ_I18N, useValue: en_US }, 
    provideAnimationsAsync(),
     provideHttpClient(),]
})
export class DashboardModule { }
