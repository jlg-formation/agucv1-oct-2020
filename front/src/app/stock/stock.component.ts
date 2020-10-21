import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  articles: Article[] = [
    { name: 'Tournevis', price: 1.2, qty: 230 },
    { name: 'Tournevis cruciforme', price: 11.2, qty: 100 },
    { name: 'Pelle', price: 3.4, qty: 230 },
    { name: 'Pince', price: 5, qty: 230 },
    { name: 'Couteau', price: 40, qty: 100 },
    { name: 'Tondeuse à gazon', price: 120, qty: 20 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
