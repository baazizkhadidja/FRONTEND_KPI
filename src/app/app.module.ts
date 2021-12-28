import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestissementComponent } from './component/investissement/investissement.component';
import { InvestissementService } from './services/investissement.service'

@NgModule({
  declarations: [
    AppComponent,
    InvestissementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    InvestissementService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
