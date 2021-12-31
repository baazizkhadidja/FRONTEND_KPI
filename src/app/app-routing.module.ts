import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestissementComponent } from './component/investissement/investissement.component'
import { DetailComponent } from './component/detail/detail.component'

const routes: Routes = [
  {path:"", component:InvestissementComponent},
  {path:"detail/:id", component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
