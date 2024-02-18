import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:3000/posts'
  constructor(private http: HttpClient) { }


  getPosts( page: number, limit: number, search: string): Observable<any>{
    let params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString())
    .set('search', search)
    
    return this.http.get(this.baseUrl, { params})
  }
}
