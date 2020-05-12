import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationComponent } from './validation/validation.component';

import { BodyComponent } from './body/body.component';

import { EProductsComponent } from './e-products/e-products.component';

import { NaqlComponent } from './naql/naql.component';
import { MuqeemComponent } from './muqeem/muqeem.component';
import { TammComponent } from './tamm/tamm.component';
import { EmailgComponent } from './emailg/emailg.component';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
const routes: Routes = [
  {path:'eProducts', component:EProductsComponent},
  {path:'eProducts/naql', component:NaqlComponent},
  {path:'eProducts/muqeem', component:MuqeemComponent},
  {path:'eProducts/tamm', component:TammComponent},
  {path:'email', component:EmailgComponent},
  {path:'IdeasBank', component:IdeasListComponent},
  {path:'Signin', component:ValidationComponent},
 
  {path:'', component:BodyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
