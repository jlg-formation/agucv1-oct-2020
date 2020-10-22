import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article, NewArticle } from '../interfaces/article';

const url = '/ws/articles';

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

  add(a: NewArticle): void {
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

  remove(selectedArticles: Article[]): void {
    super.remove(selectedArticles);
    const ids = selectedArticles.map((a) => a.id);
    console.log('ids: ', ids);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };
    this.http.delete<void>(url, options).subscribe({
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
}
