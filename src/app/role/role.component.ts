import {Component, OnInit} from '@angular/core';
import {RoleService} from "./role.service";
import {RoleModel} from "./role.model";

@Component({
  selector: 'app-root',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  constructor(private service: RoleService) {
  }

  roles: RoleModel[] = [];
  showForm: boolean = false;
  formModel: RoleModel = new RoleModel();

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.get().subscribe(
      data => {
        // @ts-ignore
        this.roles = data
      },
      error => {
        alert( "Ошибка" );
      }
    )
  }

  delete(id: string) {
    this.service.delete(id).subscribe(
      data => {
        this.get();
      },
      error => {
        this.get();
        alert( "Ошибка" );
      }
    )
  }

  save() {
    this.service.save(this.formModel).subscribe(
      data => {
        this.hideForm();
        this.get();
      },
      error => {
        this.hideForm();
        this.get();
        alert( "Ошибка" );
      }
    )
  }

  openForm(model: RoleModel = new RoleModel()) {
    this.showForm = true;
    this.formModel = model;
  }

  hideForm() {
    this.showForm = false;
    this.formModel = new RoleModel();
  }
}
