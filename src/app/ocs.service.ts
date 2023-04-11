import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  public getBook() {
    let username = "user";
    let password = "password";
    const headers = new HttpHeaders({Authorization: 'Basic ' + (username + ":" + password)})
    return this.httpClient.get("http://localhost:8080/book", {headers});
  }

  public login(username: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + (username + ":" + password)});
    return this.httpClient.get("http://localhost:8080/", {headers, responseType:'text' as 'json'});
  }

  public getUser() {
    let username = "user";
    let password = "password";
    const headers = new HttpHeaders({Authorization: 'Basic ' + (username + ":" + password)});
    return this.httpClient.get("http://localhost:8080/user", {headers});
  }
  
}
