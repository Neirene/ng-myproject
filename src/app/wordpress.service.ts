import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }


  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://public-api.wordpress.com/wp/v2/sites/projectnei.wordpress.com/posts', {
      params: {
        per_page: '6'
      }
    });
  }

  getPostPage(): Observable<any[]> {
    return this.http.get<any[]>('https://public-api.wordpress.com/wp/v2/sites/projectnei.wordpress.com/posts/?slug="what-happened"', {
      params: {
        per_page: '6'
      }
    });
  }

}
