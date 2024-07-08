import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count:counterReducer}),
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzStepsModule,
    FormsModule,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: environment.baseUrl}, { provide: NZ_I18N, useValue: en_US }, provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
