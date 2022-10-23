import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlayerModel} from "./player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = "http://localhost:8080/player";

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.url);
  }

  save(model: PlayerModel) {
    return this.http.post(this.url, model);
  }

  delete(id: string) {
    return this.http.delete(this.url + "/" + id);
  }
}
