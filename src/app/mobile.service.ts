import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  url = "http://localhost:8080/teams/all";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }
}
