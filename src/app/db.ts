import Dexie, { Table } from "dexie";

export interface Customer {
    id?: number,
    name: string,
    mobile: string,
}

export interface Product {
    id?: number,
    name: string,
    unitPrice: number,
    qty: number,
    img: string,
}

export interface Sale {
    id?: number,
    customerId?: number,
    shelfItemIds: number[],
    paid: boolean,
    createDate: Date,
}

export interface Stock {
    id?: number,
    shelfItemIds: number[],
    createDate: Date,
}

export interface ShelfItem {
    id?: number,
    productName: string,
    unitPrice: number,
    qty: number,
}

class AppDB extends Dexie {
    customers!: Table<Customer, number>;
    products!: Table<Product, number>;
    sales!: Table<Sale, number>;
    stocks!: Table<Stock, number>;
    shelfItems!: Table<ShelfItem, number>;

    constructor() {
        super('ngdexieliveQuery');
        // this.version(1).stores({
        //     customers: '++id, name, mobile',
        //     products: '++id, name, unitPrice, qty',
        //     shelfItems: '++id, productName, unitPrice, qty',
        //     sales: '++id, customerId, *shelfItemIds, paid, createDate',
        //     stocks: '++id, *shelfItemIds, createDate',
        // });
    }
}

export const db = new AppDB();