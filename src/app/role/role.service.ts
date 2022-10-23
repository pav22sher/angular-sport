import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleModel} from "./role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url = "http://localhost:8080/role";

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.url);
  }

  save(model: RoleModel) {
    return this.http.post(this.url, model);
  }

  delete(id: string) {
    return this.http.delete(this.url + "/" + id);
  }
}
