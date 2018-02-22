import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('https://my-first-angular-c4d20.firebaseio.com/.json');
  }

}
