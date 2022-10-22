import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeamModel} from "./team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url = "http://localhost:8080/team";

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.url);
  }

  save(model: TeamModel) {
    return this.http.post(this.url, model);
  }

  delete(id: string) {
    return this.http.delete(this.url + "/" + id);
  }
}
