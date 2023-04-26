import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/db';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productList = liveQuery(() => db.products.toArray());

  constructor() { }

  ngOnInit() {
  }

  addProduct() {

  }

  addStock() {
    
  }

}
