import { Component, OnInit } from '@angular/core';
import {eproducts} from './eproducts.model';



 
 
@Component({
  selector: 'app-e-products',
  templateUrl: './e-products.component.html',
  styleUrls: ['./e-products.component.css']
  
})
export class EProductsComponent implements OnInit {
  eProducts: eproducts[]= [
    new eproducts('NAQL','An electronic platform that enables individual workers and establishments in the field of transportation with all its forms to remotely apply for the various licenses necessary to carry out their works and to complete all procedures and process them electronically without having to visit the Ministry of Transport or its branches and without the need to print any paper transactions.','assets/img/naql.png'),
    new eproducts('MUQEEM','“Muqeem” service allows organizations to review its resident workers data and complete their transactions online, anytime and anywhere','assets/img/muqeem.png'),
    new eproducts('TAMM','Tamm service helps vehicles owners in Saudi Arabia to get all updated information of their respective vehicles from their governmental sources','assets/img/tamm.png')
  ];
 


  ngOnInit(): void {
  }

}
