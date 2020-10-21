import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { name: 'Tournevis', price: 1.2, qty: 230 },
    { name: 'Tournevis cruciforme', price: 11.2, qty: 100 },
    { name: 'Pelle', price: 3.4, qty: 230 },
    { name: 'Pince', price: 5, qty: 230 },
    { name: 'Couteau', price: 40, qty: 100 },
    { name: 'Tondeuse à gazon', price: 120, qty: 20 },
  ];

  constructor() {}

  add(a: Article): void {
    this.articles.push(a);
  }
}
