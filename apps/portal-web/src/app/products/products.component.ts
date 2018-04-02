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
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1494149474/jvs2bzb6hmc6kuhfbprh.jpg',
      isNewlyLaunched: true,
      isJustArrived:false,
      isDiscounted:true,
      isNiche: false,
      isCelebrity: false,
      currency: 'AED',
      qtyAvailable: 100,
      qtySelected: null
    },
    {
      name: 'ACQUA DI PARMA BLU M/G DI SARDEGNA (U) B/L 200 ml',
      price:'100',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1504683159/isab139rtwndsqfehkym.jpg',
      isNewlyLaunched: false,
      isJustArrived:false,
      isDiscounted:true,
      isNiche: false,
      isCelebrity: false,
      currency: 'AED',
      qtyAvailable: 100,
      qtySelected: null
    },
    {
      name: 'ALEXANDRE J THE COLL GOLDEN OUD (U) EDP TEST 100',
      price:'250',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1519039491/djeoonst98liemwx3iib.jpg',
      isNewlyLaunched: false,
      isJustArrived:true,
      isDiscounted:false,
      isNiche: false,
      isCelebrity: false,
      currency: 'AED',
      qtyAvailable: 100,
      qtySelected: null
    },
    {
      name:'ABERCROMBIE & FITCH FIRST INSTINCT (L) EDP 50 ml',
      price:'55',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1494149474/jvs2bzb6hmc6kuhfbprh.jpg',
      isNewlyLaunched: false,
      isJustArrived:false,
      isDiscounted:false,
      isNiche: true,
      isCelebrity: false,
      currency: 'AED',
      qtyAvailable: 100,
      qtySelected: null
    },
    {
      name: 'ACQUA DI PARMA BLU M/G DI SARDEGNA (U) B/L 200 ml',
      price:'100',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1504683159/isab139rtwndsqfehkym.jpg',
      isNewlyLaunched: true,
      isJustArrived:false,
      isDiscounted:true,
      isNiche: true,
      isCelebrity: false,
      currency: 'AED',
      qtyAvailable: 100,
      qtySelected: null
    },
    {
      name: 'ALEXANDRE J THE COLL GOLDEN OUD (U) EDP TEST 100',
      price:'250',
      image:'https://res.cloudinary.com/hamropic/image/upload/c_thumb,w_200/v1519039491/djeoonst98liemwx3iib.jpg',
      isNewlyLaunched: false,
      isJustArrived:false,
      isDiscounted:false,
      isNiche: false,
      isCelebrity: true,
      currency: 'AED',
      qtyAvailable: 100,
      qtySelected: null
    }
  ]

  constructor() {}

  ngOnInit() {}


}
