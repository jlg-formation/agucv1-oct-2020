import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor() {
    super();
    console.log('http article service instantiated');
  }
}
