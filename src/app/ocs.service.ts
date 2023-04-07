import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcsService {

  private baseURL = "http://localhost:8080/book";

  constructor(
    private httpClient: HttpClient
  ) { }

  getBookList(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}`);
  }
}
