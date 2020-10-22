import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpArticleService } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should be created with 404 not found', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 404, statusText: 'not found' });
    expect(service).toBeTruthy();
  });

  it('should add a article', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    service.add({ name: 'titi', price: 123, qty: 100 });
    const req2 = http.expectOne('/ws/articles');
    expect(req2.request.method).toEqual('POST');
    req2.flush('');
    const req3 = http.expectOne('/ws/articles');
    expect(req3.request.method).toEqual('GET');
    req3.flush([]);
    expect(service).toBeTruthy();
  });

  it('should not add an undefined article', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    let hasBeenCatched = false;
    try {
      service.add(undefined);
    } catch (e) {
      hasBeenCatched = true;
    }
    expect(hasBeenCatched).toBeTrue();
    expect(service).toBeTruthy();
  });

  it('should add a article with error', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    service.add({ name: 'titi', price: 123, qty: 100 });
    const req2 = http.expectOne('/ws/articles');
    expect(req2.request.method).toEqual('POST');
    req2.flush('', { status: 405, statusText: 'method not allowed' });
    expect(service).toBeTruthy();
  });

  it('should refresh', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    service.refresh();
    const req2 = http.expectOne('/ws/articles');
    expect(req2.request.method).toEqual('GET');
    req2.flush([]);
    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    service.remove([{ id: 'asdfafsd', name: 'titi', price: 123, qty: 100 }]);
    const req2 = http.expectOne('/ws/articles');
    expect(req2.request.method).toEqual('DELETE');
    req2.flush('');
    const req3 = http.expectOne('/ws/articles');
    expect(req3.request.method).toEqual('GET');
    req3.flush([]);
    expect(service).toBeTruthy();
  });

  it('should remove with error', () => {
    const req = http.expectOne('/ws/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    service.remove([{ id: 'asdfafsd', name: 'titi', price: 123, qty: 100 }]);
    const req2 = http.expectOne('/ws/articles');
    expect(req2.request.method).toEqual('DELETE');
    req2.flush('', { status: 405, statusText: 'method not allowed' });
    expect(service).toBeTruthy();
  });
});
