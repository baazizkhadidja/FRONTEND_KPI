import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestissementComponent } from './component/investissement/investissement.component';
import { InvestissementService } from './services/investissement.service';
import { DetailComponent } from './component/detail/detail.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchfilPipe } from './searchfil.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InvestissementComponent,
    DetailComponent,
    SearchfilPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    InvestissementService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
