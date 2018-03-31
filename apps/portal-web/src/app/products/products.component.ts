import { ProductComponent } from './../product/product.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ij-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name:'ABERCROMBIE & FITCH FIRST INSTINCT (L) EDP 50 ml',
      price:'55',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1494149474/jvs2bzb6hmc6kuhfbprh.jpg'
    },
    {
      name: 'ACQUA DI PARMA BLU M/G DI SARDEGNA (U) B/L 200 ml',
      price:'100',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1504683159/isab139rtwndsqfehkym.jpg'
    },
    {
      name: 'ALEXANDRE J THE COLL GOLDEN OUD (U) EDP TEST 100',
      price:'250',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1519039491/djeoonst98liemwx3iib.jpg'
    },
    {
      name:'ABERCROMBIE & FITCH FIRST INSTINCT (L) EDP 50 ml',
      price:'55',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1494149474/jvs2bzb6hmc6kuhfbprh.jpg'
    },
    {
      name: 'ACQUA DI PARMA BLU M/G DI SARDEGNA (U) B/L 200 ml',
      price:'100',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1504683159/isab139rtwndsqfehkym.jpg'
    },
    {
      name: 'ALEXANDRE J THE COLL GOLDEN OUD (U) EDP TEST 100',
      price:'250',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1519039491/djeoonst98liemwx3iib.jpg'
    }
  ]

  constructor() {}

  ngOnInit() {}


}
