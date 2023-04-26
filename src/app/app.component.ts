import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/dashboard', icon: 'home' },
    { title: 'Products', url: '/products', icon: 'storefront' },
    { title: 'Sales', url: '/sales', icon: 'logo-usd' },
    { title: 'Customers', url: '/customers', icon: 'people' },
  ];
  constructor() {}
}
