import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostcardHttpService {

  constructor(private http: HttpClient) { }

  public getData(url: string, otions?: any): Observable<any> {
    return this.http.get(url, otions);
  }

  public postData(url: string, body: any, otions?: any): Observable<any> {
    return this.http.post<any>(url, body, otions);
  }
}
