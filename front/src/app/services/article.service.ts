import { Injectable } from '@angular/core';
import { Article, NewArticle } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = this.getArticles();

  constructor() {}

  getArticles(): Article[] {
    const str = localStorage.getItem('articles');
    if (!str) {
      return [];
    }
    return JSON.parse(str) as Article[];
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  add(a: NewArticle): void {
    if (!a) {
      throw new Error('article is undefined');
    }
    this.articles.push(a as Article);
    this.save();
  }

  remove(selectedArticles: Article[]): void {
    this.articles = this.articles.filter(
      (art) => !selectedArticles.includes(art)
    );
    this.save();
  }

  refresh(): void {
    this.articles = this.getArticles();
  }
}
