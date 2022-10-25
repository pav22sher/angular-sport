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

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 100;

  ngOnInit(): void {
    this.get();
  }

  get() {
    let params: any = {};
    if (this.currentPage) {
      params['page'] = this.currentPage - 1;
    }
    if (this.itemsPerPage) {
      params['size'] = this.itemsPerPage;
    }
    this.service.get(params).subscribe(
      data => {
        // @ts-ignore
        this.teams = data.content;
        // @ts-ignore
        this.totalItems = data.totalElements;
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

  onPageChange(event: any) {
    this.currentPage = event;
    this.get();
  }
}
