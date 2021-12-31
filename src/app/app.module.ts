import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestissementComponent } from './component/investissement/investissement.component';
import { InvestissementService } from './services/investissement.service';
import { DetailComponent } from './component/detail/detail.component'

@NgModule({
  declarations: [
    AppComponent,
    InvestissementComponent,
    DetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    InvestissementService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
