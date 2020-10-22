import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from '../interfaces/article';

const url = 'http://localhost:3000/ws/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article service instantiated');
    this.load();
  }

  load(): void {
    this.http.get<Article[]>(url).subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  add(a: Article): void {
    super.add(a);
    this.http.post<void>(url, a).subscribe({
      next: () => {
        console.log('next');
        this.load();
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  refresh(): void {
    this.load();
  }
}
