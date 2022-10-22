import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PositionModel} from "./position.model";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  url = "http://localhost:8080/position";

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.url);
  }

  save(model: PositionModel) {
    return this.http.post(this.url, model);
  }

  delete(id: string) {
    return this.http.delete(this.url + "/" + id);
  }
}
