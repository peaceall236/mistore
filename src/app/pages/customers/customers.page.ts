import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/db';

interface CustomerTableDTO {
  id: number,
  name: string,
  mobile: string,
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  customerList = liveQuery(() => db.customers.toArray());

  constructor() {
  }

  ngOnInit() {
  }

  addCustomer() {
    
  }

}
