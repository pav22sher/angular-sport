import {Component, OnInit} from '@angular/core';
import {PlayerService} from "./player.service";
import {PlayerModel} from "./player.model";
import {TeamService} from "../team/team.service";
import {RoleService} from "../role/role.service";
import {PositionService} from "../position/position.service";
import {TeamModel} from "../team/team.model";
import {RoleModel} from "../role/role.model";
import {PositionModel} from "../position/position.model";

@Component({
  selector: 'app-root',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  constructor(private playerService: PlayerService,
              private teamService: TeamService,
              private roleService: RoleService,
              private positionService: PositionService) {
  }

  players: PlayerModel[] = [];
  teams: TeamModel[] = [];
  roles: RoleModel[] = [];
  positions: PositionModel[] = [];
  showForm: boolean = false;
  formModel: PlayerModel = new PlayerModel();

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 100;

  firstName: string;
  lastName: string;
  secondName: string;
  email: string;
  ratingFrom: number;
  ratingTo: number;
  teamId: string;
  roleId: string;
  positionId: string;

  ngOnInit(): void {
    this.get();
    this.getTeams();
    this.getRoles();
    this.getPositions();
  }

  getTeams() {
    let params: any = {};
    //todo пока так
    params['page'] = 0;
    params['size'] = 100;
    this.teamService.get(params).subscribe(
      data => {
        // @ts-ignore
        this.teams = data.content;
      },
      error => {
        alert("Ошибка");
      }
    )
  }

  getRoles() {
    this.roleService.get().subscribe(
      data => {
        // @ts-ignore
        this.roles = data
      },
      error => {
        alert("Ошибка");
      }
    )
  }

  getPositions() {
    this.positionService.get().subscribe(
      data => {
        // @ts-ignore
        this.positions = data
      },
      error => {
        alert("Ошибка");
      }
    )
  }

  get() {
    let params: any = {};
    if (this.firstName) {
      params['firstName'] = this.firstName;
    }
    if (this.lastName) {
      params['lastName'] = this.lastName;
    }
    if (this.secondName) {
      params['secondName'] = this.secondName;
    }
    if (this.email) {
      params['email'] = this.email;
    }
    if (this.ratingFrom) {
      params['ratingFrom'] = this.ratingFrom;
    }
    if (this.ratingTo) {
      params['ratingTo'] = this.ratingTo;
    }
    if (this.teamId) {
      params['teamId'] = this.teamId;
    }
    if (this.roleId) {
      params['roleId'] = this.roleId;
    }
    if (this.positionId) {
      params['positionId'] = this.positionId;
    }
    if (this.currentPage) {
      params['page'] = this.currentPage - 1;
    }
    if (this.itemsPerPage) {
      params['size'] = this.itemsPerPage;
    }
    this.playerService.get(params).subscribe(
      data => {
        // @ts-ignore
        this.players = data.content;
        // @ts-ignore
        this.totalItems = data.totalElements;
      },
      error => {
        alert("Ошибка");
      }
    )
  }

  delete(id: string) {
    this.playerService.delete(id).subscribe(
      data => {
        this.get();
      },
      error => {
        this.get();
        alert("Ошибка");
      }
    )
  }

  save() {
    this.playerService.save(this.formModel).subscribe(
      data => {
        this.hideForm();
        this.get();
      },
      error => {
        this.hideForm();
        this.get();
        alert("Ошибка");
      }
    )
  }

  openForm(model: PlayerModel = new PlayerModel()) {
    this.showForm = true;
    this.formModel = model;
  }

  hideForm() {
    this.showForm = false;
    this.formModel = new PlayerModel();
  }

  search() {
    this.get();
  }

  report() {
    window.open("http://localhost:8080/player/report", "_self");
  }

  onPageChange(event: any) {
    this.currentPage = event;
    this.get();
  }
}
