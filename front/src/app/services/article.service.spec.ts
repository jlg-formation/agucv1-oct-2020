import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorage.clear();
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove at least with one article', () => {
    service.articles = [{ id: 'asdfaf', name: 'asdfafds', price: 1, qty: 3 }];
    service.remove([]);
    expect(service).toBeTruthy();
  });

  it('should refresh', () => {
    service.refresh();
    expect(service).toBeTruthy();
  });
});
