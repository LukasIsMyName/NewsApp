import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getFeed(){
    return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2023-06-02&sortBy=publishedAt&language=en&apiKey=520b4129a2d14a9a84a0484c612df22b');
  }
}
