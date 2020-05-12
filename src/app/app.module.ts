import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationComponent } from './validation/validation.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { EProductsComponent } from './e-products/e-products.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateService } from  '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from  '@angular/common/http';
import { NaqlComponent } from './naql/naql.component';
import { MuqeemComponent } from './muqeem/muqeem.component';
import { TammComponent } from './tamm/tamm.component';
import { EmailgComponent } from './emailg/emailg.component';
import { EmailRepository  } from './repository/email';
import { IdeasListComponent } from './ideas-list/ideas-list.component';
import { IdeasAddComponent } from './ideas-list/ideas-add/ideas-add.component';
export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    EProductsComponent,
    NaqlComponent,
    TammComponent,
    MuqeemComponent,
    EmailgComponent,
    IdeasListComponent,
    IdeasAddComponent
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
     {path:'eProducts', component:EProductsComponent},
     {path:'eProducts/naql', component:NaqlComponent},
     {path:'eProducts/muqeem', component:MuqeemComponent},
     {path:'eProducts/tamm', component:TammComponent},
     {path:'Signin', component:ValidationComponent},
     {path:'email', component:EmailgComponent},
     {path:'IdeasBank', component:IdeasListComponent},
     {path:'', component:BodyComponent}
     
    ]),
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      },isolate: true
    })
    
    
  ],
  exports: [TranslateModule],
  providers: [TranslateService, EmailRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
