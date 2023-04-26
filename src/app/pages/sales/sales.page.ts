import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/db';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  saleList = liveQuery(() => db.sales.toArray());

  constructor() { }

  ngOnInit() {
  }

  addSale() {
    
  }

}
