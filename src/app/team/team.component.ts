import {Component, OnInit} from '@angular/core';
import {TeamService} from "./team.service";
import {TeamModel} from "./team.model";

@Component({
  selector: 'app-root',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  constructor(private service: TeamService) {
  }
  teams:TeamModel[] = [];
  showForm: boolean = false;
  formModel: TeamModel = new TeamModel();

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.service.get().subscribe(
      data => {
        // @ts-ignore
        this.teams = data
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
        alert( "Ошибка" );
        this.get();
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

  openForm(model: TeamModel = new TeamModel()) {
    this.showForm = true;
    this.formModel = model;
  }

  hideForm() {
    this.showForm = false;
    this.formModel = new TeamModel();
  }
}
